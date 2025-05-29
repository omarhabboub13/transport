import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VoteService } from './vote.service';
import {CreateVoteDto} from "./DTO/create-vote.dto";

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}
  @Post()
  createpreset(@Body() body: CreateVoteDto) {
    return this.voteService.createvote(body);
  }
  @Get()
  fetchPresets() {
    return this.voteService.fetchAllvotes();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.voteService.deletevote(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updated: CreateVoteDto) {
    return this.voteService.updatevote(id, updated);
  }
}
