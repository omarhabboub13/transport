import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Trip } from './trip.schema';
import { Model, Types } from 'mongoose';
import { CreateTripDto } from './DTO/create-trip.dto';

@Injectable()
export class TripService {
  constructor(
    @InjectModel(Trip.name) private readonly tripModel: Model<Trip>,
  ) {}

  createtrip(createbody: CreateTripDto) {
    const tripData: any = {
      lineId: new Types.ObjectId(createbody.lineId),
      timeId: new Types.ObjectId(createbody.timeId),
    };

    if (createbody.busId) {
      tripData.busId = new Types.ObjectId(createbody.busId);
    }

    const newTrip = new this.tripModel(tripData);
    return newTrip.save();
  }

  async fetchAlltrips() {
    const presets = await this.tripModel.find().exec();
    return presets;
  }
  async deletetrip(id: string) {
    const del = await this.tripModel.findByIdAndDelete(id).exec();
    if (del) {
      return 'deleted successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async updatetrip(id: string, updated: CreateTripDto) {
    const update = await this.tripModel.findByIdAndUpdate(id, updated).exec();
    if (update) {
      return 'updated successfully';
    } else {
      throw new NotFoundException('err');
    }
  }
  async getAllTripsWithDetails() {
    const trips = await this.tripModel
      .find()
      .populate('lineId')
      .populate('timeId')
      .populate('busId')
      .exec();

    const details = trips.map((trip) => ({
      line: trip.lineId,
      time: trip.timeId,
      bus: trip.busId,
    }));

    return { details };
  }
}
