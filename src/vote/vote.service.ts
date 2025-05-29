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
}
