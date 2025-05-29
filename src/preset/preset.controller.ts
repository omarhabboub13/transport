import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PresetService } from './preset.service';
import { CreatePresetDto } from './DTO/preset.dto';

@Controller('preset')
export class PresetController {
  constructor(private readonly presetService: PresetService) {}
  @Post()
  createpreset(@Body() body: CreatePresetDto) {
    return this.presetService.createpreset(body);
  }
  @Get()
  fetchPresets() {
    return this.presetService.fetchAllPreset();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.presetService.deletepreset(id);
  }
  @Patch(':id')
  update(@Param('id') id: string , @Body() updated:CreatePresetDto) {
    return this.presetService.updatepreset(id,updated);
  }
}
