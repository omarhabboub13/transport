import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTimeDto } from './DTO/create-time.dto';
import { Time } from './time.schema';

@Injectable()
export class TimesService {
  constructor(
    @InjectModel(Time.name) private readonly presetModel: Model<Time>,
  ) {}

  createtime(createbody: CreateTimeDto) {
    const newPreset = new this.presetModel(createbody);
    return newPreset.save();
  }
  async fetchAlltimes() {
    const presets = await this.presetModel.find().exec();
    return presets;
  }
  async deletetime(id: string) {
    const del = await this.presetModel.findByIdAndDelete(id).exec();
    if (del) {
      return 'deleted successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async updatetime(id: string, updated: CreateTimeDto) {
    const update = await this.presetModel.findByIdAndUpdate(id, updated).exec();
    if (update) {
      return 'updated successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
}
