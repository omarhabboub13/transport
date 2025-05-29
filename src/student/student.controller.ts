import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './DTO/create-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  createstudent(@Body() Body: CreateStudentDto) {
    return this.studentService.createstudent(Body);
  }
  @Get()
  fetchStudents() {
    return this.studentService.fetchAllStudents();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.studentService.deletestudent(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updated: CreateStudentDto) {
    return this.studentService.updatestudent(id, updated);
  }
  @Get('withpresets')
  async studentswithprofiles() {
    return this.studentService.getStudentsWithPresets();
  }
}
