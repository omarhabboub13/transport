import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vote } from './vote.schema';
import { Model, Types } from 'mongoose';
import { CreateVoteDto } from './DTO/create-vote.dto';

@Injectable()
export class VoteService {
  constructor(
    @InjectModel(Vote.name) private readonly presetModel: Model<Vote>,
  ) {}

  createvote(createbody: CreateVoteDto) {
    const newPreset = new this.presetModel({
      studentId: new Types.ObjectId(createbody.studentId),
      tripId: new Types.ObjectId(createbody.tripId),
    });
    return newPreset.save();
  }
  async fetchAllvotes() {
    const presets = await this.presetModel.find().exec();
    return presets;
  }
  async deletevote(id: string) {
    const del = await this.presetModel.findByIdAndDelete(id).exec();
    if (del) {
      return 'deleted successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async updatevote(id: string, updated: CreateVoteDto) {
    const update = await this.presetModel.findByIdAndUpdate(id, updated).exec();
    if (update) {
      return 'updated successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async getVotesWithPointAndStudents() {
    const results = await this.presetModel.aggregate([
      // Lookup trip for each vote
      {
        $lookup: {
          from: 'trips',
          localField: 'tripId',
          foreignField: '_id',
          as: 'trip',
        },
      },
      { $unwind: '$trip' },

      // Lookup point by matching trip.lineId === point.lineId
      {
        $lookup: {
          from: 'points',
          localField: 'trip.lineId',
          foreignField: 'lineId',
          as: 'points',
        },
      },

      // Lookup all students who voted for trips with the same lineId
      {
        $lookup: {
          from: 'votes',
          let: { lineId: '$trip.lineId' },
          pipeline: [
            {
              $lookup: {
                from: 'trips',
                localField: 'tripId',
                foreignField: '_id',
                as: 'tripMatch',
              },
            },
            { $unwind: '$tripMatch' },
            {
              $match: {
                $expr: { $eq: ['$$lineId', '$tripMatch.lineId'] },
              },
            },
            {
              $lookup: {
                from: 'students',
                localField: 'studentId',
                foreignField: '_id',
                as: 'student',
              },
            },
            { $unwind: '$student' },
            {
              $replaceWith: '$student',
            },
          ],
          as: 'studentsVotedForSamePoint',
        },
      },

      // Optional: Remove password before returning
      {
        $project: {
          trip: 1,
          points: 1,
          studentsVotedForSamePoint: {
            _id: 1,
            name: 1,
            phone: 1,
          },
        },
      },
    ]);

    return { details: results };
  }
}
