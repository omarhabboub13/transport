import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bus } from './bus.schema';
import { Model } from 'mongoose';
import { CreateBusDto } from './dto/create-bus.dto';

@Injectable()
export class BusService {
  constructor(@InjectModel(Bus.name) private readonly busModel: Model<Bus>) {}
  createbus(createbody: CreateBusDto) {
    const newbus = new this.busModel(createbody);
    return newbus.save();
  }
  async fetchAllbuses() {
    const buses = await this.busModel.find().exec();
    return buses;
  }
  async deletebus(id: string) {
    const del = await this.busModel.findByIdAndDelete(id).exec();
    if (del) {
      return 'deleted successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async updatebus(id: string, updated: CreateBusDto) {
    const update = await this.busModel.findByIdAndUpdate(id, updated).exec();
    if (update) {
      return 'updated successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
}
