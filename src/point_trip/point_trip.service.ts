import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PointTrip } from './pointtrip.schema';
import { Model, Types } from 'mongoose';
import { CreatePointTripDto } from './DTO/create-pointtrip.dto';

@Injectable()
export class PointTripService {
  constructor(
    @InjectModel(PointTrip.name)
    private readonly point_tripModel: Model<PointTrip>,
  ) {}

  createPoint_trip(createbody: CreatePointTripDto) {
    const newPreset = new this.point_tripModel({
      pointId: new Types.ObjectId(createbody.pointId),
      tripId: new Types.ObjectId(createbody.tripId),
    });
    return newPreset.save();
  }
  async fetchAllPoint_trip() {
    const presets = await this.point_tripModel.find().exec();
    return presets;
  }
  async deletePoint_trip(id: string) {
    const del = await this.point_tripModel.findByIdAndDelete(id).exec();
    if (del) {
      return 'deleted successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async updatePoint_trip(id: string, updated: CreatePointTripDto) {
    const update = await this.point_tripModel
      .findByIdAndUpdate(id, updated)
      .exec();
    if (update) {
      return 'updated successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async getAllPointTripsWithDetails() {
    return this.point_tripModel
      .find()
      .populate('pointId')
      .populate('tripId')
      .exec();
  }
}
