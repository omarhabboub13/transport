import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createAuthDTO } from './dto/auth.dto';
import { CreateStudentDto } from 'src/student/DTO/create-student.dto';
import { RolesGuard } from 'src/auth/admin.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(RolesGuard)
  @Post('signin')
  signin(@Body() signinbody: createAuthDTO) {
    return this.authService.signin(signinbody);
  }
  @Post('signup')
  signup(@Body() signupbody: CreateStudentDto) {
    return this.authService.signup(signupbody);
  }
}
