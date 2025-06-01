import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PointTime } from './pointtime.schema';
import { Model, Types } from 'mongoose';
import { CreatePointTimeDto } from './DTO/create-pointtime.dto';

@Injectable()
export class PointTimeService {
  constructor(
    @InjectModel(PointTime.name)
    private readonly point_tripModel: Model<PointTime>,
  ) {}

  createPoint_time(createbody: CreatePointTimeDto) {
    const newPreset = new this.point_tripModel({
      pointId: new Types.ObjectId(createbody.pointId),
      timeId: new Types.ObjectId(createbody.timeId),
      busId:new Types.ObjectId(createbody.busId)
    });
    return newPreset.save();
  }
  async fetchAllPoint_time() {
    const presets = await this.point_tripModel.find().exec();
    return presets;
  }
  async deletePoint_time(id: string) {
    const del = await this.point_tripModel.findByIdAndDelete(id).exec();
    if (del) {
      return 'deleted successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async updatePoint_time(id: string, updated: CreatePointTimeDto) {
    const update = await this.point_tripModel
      .findByIdAndUpdate(id, updated)
      .exec();
    if (update) {
      return 'updated successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async getAllPointTimesWithDetails() {
    return this.point_tripModel
      .find()
      .populate('pointId')
      .populate('tripId')
      .exec();
  }
}
