import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLineDto } from './DTO/create-line.dto';
import { Line } from './line.schema';
import { Point } from '../points/point.schema';

@Injectable()
export class LinesService {
  constructor(
    @InjectModel(Line.name) private readonly lineModel: Model<Line>,
    @InjectModel(Point.name) private pointModel: Model<Point>,
  ) {}

  // Create Line
  async createLine(createLineDto: CreateLineDto) {
    const newLine = new this.lineModel(createLineDto);
    return newLine.save();
  }

  // Delete Line
  async deleteLine(lineId: string) {
    const deletedLine = await this.lineModel
      .findByIdAndDelete(lineId)
      .lean()
      .exec();
    if (!deletedLine) {
      throw new NotFoundException(`Line with ID ${lineId} not found`);
    }
    return deletedLine;
  }

  // Update Line
  async updateLine(lineId: string, updateDto: Partial<CreateLineDto>) {
    const updatedLine = await this.lineModel
      .findByIdAndUpdate(
        lineId,
        { ...updateDto, updatedAt: new Date() },
        { new: true },
      )
      .lean()
      .exec();

    if (!updatedLine) {
      throw new NotFoundException(`Line with ID ${lineId} not found`);
    }

    return updatedLine;
  }

  // Get All Lines
  async getAllLines() {
    return this.lineModel.find().lean().exec();
  }
  async getLinesWithPoints() {
    const linesWithPoints = await this.lineModel.aggregate([
      {
        $lookup: {
          from: 'points', // The name of the points collection
          localField: '_id',
          foreignField: 'lineId',
          as: 'points',
        },
      },
    ]);

    return linesWithPoints;
  }
}
