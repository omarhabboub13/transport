import { Controller } from '@nestjs/common';
import { PointTripService } from './point_trip.service';

@Controller('point-trip')
export class PointTripController {
  constructor(private readonly pointTripService: PointTripService) {}
}
