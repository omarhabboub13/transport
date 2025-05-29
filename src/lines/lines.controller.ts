import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LinesService } from './lines.service';
import { CreateLineDto } from './DTO/create-line.dto';

@Controller('lines')
export class LinesController {
  constructor(private readonly linesService: LinesService) {}

  @Post()
  createLine(@Body() dto: CreateLineDto) {
    return this.linesService.createLine(dto);
  }

  @Patch(':linesId')
  updateLine(
    @Param('linesId') id: string,
    @Body() updateDto: Partial<CreateLineDto>,
  ) {
    return this.linesService.updateLine(id, updateDto);
  }

  @Delete(':linesId')
  deleteLine(@Param('linesId') id: string) {
    return this.linesService.deleteLine(id);
  }

  @Get()
  getLines() {
    return this.linesService.getAllLines();
  }
  @Get('withpoints')
  getLineswithpoints() {
    return this.linesService.getLinesWithPoints();
  }
  
}
