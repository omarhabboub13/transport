import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Preset } from './preset.schema';
import { Model } from 'mongoose';
import { CreatePresetDto } from './DTO/preset.dto';

@Injectable()
export class PresetService {
  constructor(
    @InjectModel(Preset.name) private readonly presetModel: Model<Preset>,
  ) {}

  createpreset(createbody: CreatePresetDto) {
    const newPreset = new this.presetModel(createbody);
    return newPreset.save();
  }
  async fetchAllPreset() {
    const presets = await this.presetModel.find().exec();
    return presets;
  }
  async deletepreset(id: string) {
    const del = await this.presetModel.findByIdAndDelete(id).exec();
    if (del) {
      return 'deleted successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async updatepreset(id: string,updated:CreatePresetDto) {
    const update = await this.presetModel.findByIdAndUpdate(id,updated).exec();
    if (update) {
      return 'updated successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
}
