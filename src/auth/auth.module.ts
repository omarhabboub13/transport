import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { StudentModule } from 'src/student/student.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { StudentService } from 'src/student/student.service';

@Module({
  imports: [
    StudentModule,
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: '4000d' },
      secret: 'omar123',
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports:[AuthService,JwtModule]
})
export class AuthModule {}
