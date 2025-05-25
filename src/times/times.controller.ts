import { Controller } from '@nestjs/common';
import { TimesService } from './times.service';

@Controller('times')
export class TimesController {
  constructor(private readonly timesService: TimesService) {}
}
