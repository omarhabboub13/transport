import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Point } from './point.schema';
import { CreatePointDto } from './DTO/create-point.dto';


@Injectable()
export class PointService {
  constructor(
    @InjectModel(Point.name) private readonly pointModel: Model<Point>,
  ) {}

  async createPoint(createPointDto: CreatePointDto) {
    const newPoint = new this.pointModel({
      location: createPointDto.location,
      locationX: createPointDto.locationX,
      locationY: createPointDto.locationY,
      lineId: new Types.ObjectId(createPointDto.lineId),
    });
    return newPoint.save();
  }
  //deletePoint
  async deletePoint(pointId: string) {
    const deletedPoint = await this.pointModel
      .findByIdAndDelete(pointId)
      .lean()
      .exec();
    if (!deletedPoint) {
      throw new NotFoundException(`Point with ID ${pointId} not found`);
    }
    return deletedPoint;
  }
  //updatePoint
  async updatePoint(pointId: string) {
    const updatedPoint = await this.pointModel
      .findByIdAndUpdate(pointId, { updatedAt: new Date() }, { new: true })
      .lean()
      .exec();
    if (!updatedPoint) {
      throw new NotFoundException(`Point with ID ${pointId} not found`);
    }
    return updatedPoint;
  }
  async getAllPoints() {
    return this.pointModel.find().lean().exec();
  }
  // async getPointsWithVotedStudents() {
  //   const points = await this.pointModel.find().lean();

  //   const results = await Promise.all(
  //     points.map(async (point) => {
  //       // Find all trips associated with this point
  //       const pointTrips = await this.pointTripModel
  //         .find({ pointId: point._id })
  //         .lean();
  //       const tripIds = pointTrips.map((pt) => pt.tripId);

  //       // Find all votes for those trips
  //       const votes = await this.voteModel
  //         .find({ tripId: { $in: tripIds } })
  //         .populate('studentId')
  //         .lean();

  //       // Get unique student info
  //       const studentMap = new Map();
  //       for (const vote of votes) {
  //         if (vote.studentId) {
  //           studentMap.set(vote.studentId._id.toString(), vote.studentId);
  //         }
  //       }

  //       return {
  //         ...point,
  //         students: Array.from(studentMap.values()),
  //       };
  //     }),
  //   );

  //   return results;
  // }
}
