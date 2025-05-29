//jwt.strategy.ts
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { StudentService } from '../student/student.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private studentservice: StudentService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'omar123',
    });
  }

  async validate(payload: any) {
    console.log(payload);

    const user = await this.studentservice.getonebyphone(payload.phone);
    
    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      id: user._id,
      name: user.name,
      phone: user.phone,
    };
  }
}
