import { Controller } from '@nestjs/common';
import { LinesService } from './lines.service';

@Controller('lines')
export class LinesController {
  constructor(private readonly linesService: LinesService) {}
}
