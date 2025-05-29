import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { createAuthDTO } from './dto/auth.dto';
import { CreateStudentDto } from 'src/student/DTO/create-student.dto';
import * as bcryptt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userservice: StudentService,
    private jwtService: JwtService,
  ) {}

  async signin(body: createAuthDTO) {
    const user = await this.userservice.getonebyphone(body);
    if (!user || !bcryptt.compareSync(body.password, user.password)) {
      throw new UnauthorizedException();
    }
    const payload = {
      id: user._id,
      name: user.name,
      phone: user.phone,

      // role: user.role,
    };
    const { password, ...userWithoutPasssword } = user;
    return {
      name: user.name,
      phone: user.phone,
      id: user._id,
      token: this.jwtService.sign(payload),
      // role: user.role,
    };
  }

  async signup(signupbody: CreateStudentDto) {
    const { password, ...restdata } = signupbody;
    const salt = bcryptt.genSaltSync(12);
    const hashedpassword = bcryptt.hashSync(password, salt);

    const newuser = await this.userservice.createstudent({
      password: hashedpassword,
      name: restdata.name,
      phone:restdata.phone,
      presetId: restdata.presetId,
      // role: restdata.role
    });

    // const { password: aaa, ...rest } = newuser;

    return 'User Created succesful';
  }
}
