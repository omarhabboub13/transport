import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PointService } from './points.service';
import { CreatePointDto } from './DTO/create-point.dto';

@Controller('points')
export class PointsController {
  constructor(private readonly pointsService: PointService) {}

  @Post()
  createPoint(@Body() dto: CreatePointDto) {
    return this.pointsService.createPoint(dto);
  }

  @Patch(':pointId')
  updatePoint(@Param('pointId') id: string) {
    return this.pointsService.updatePoint(id);
  }

  @Delete(':pointId')
  deletePoint(@Param('pointId') id: string) {
    return this.pointsService.deletePoint(id);
  }

  @Get()
  getPoints() {
    return this.pointsService.getAllPoints();
  }
  // @Get('withvotes')
  // getpointswithstudentsvoting(){
  //   return this.pointsService.getPointsWithVotedStudents();
  // }
}
