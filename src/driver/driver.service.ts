import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Driver } from './driver.schema';
import { Model, Types } from 'mongoose';
import { CreateDriverDto } from './DTO/create-driver.dto';

@Injectable()
export class DriverService {
  constructor(
    @InjectModel(Driver.name) private readonly busModel: Model<Driver>,
  ) {}
  createdriver(createbody: CreateDriverDto) {
    const newdriver = new this.busModel({
      BusId: new Types.ObjectId(createbody.BusId),
      name: createbody.name,
      phone: createbody.phone,
    });
    return newdriver.save();
  }
  async fetchAlldrivers() {
    const drivers = await this.busModel.find().exec();
    return drivers;
  }
  async deletedriver(id: string) {
    const del = await this.busModel.findByIdAndDelete(id).exec();
    if (del) {
      return 'deleted successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async updatedriver(id: string, updated: CreateDriverDto) {
    const update = await this.busModel.findByIdAndUpdate(id, updated).exec();
    if (update) {
      return 'updated successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async getDriversWithBus() {
    const drivers = await this.busModel.find().populate('BusId').exec();

    const details = drivers.map((driver) => ({
      driver: {
        _id: driver._id,
        name: driver.name,
        phone: driver.phone,
      },
      bus: driver.BusId,
    }));

    return { details };
  }
}
