import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PointsModule } from './points/points.module';
import { TimesModule } from './times/times.module';
import { LinesModule } from './lines/lines.module';
import { DriverModule } from './driver/driver.module';
import { BusModule } from './bus/bus.module';
import { StudentModule } from './student/student.module';
import { VoteModule } from './vote/vote.module';
import { PresetModule } from './preset/preset.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PointTimeModule } from './point_time/point_time.module';

@Module({
  imports: [
    PointsModule,
    TimesModule,
    LinesModule,
    DriverModule,
    BusModule,
    StudentModule,
    VoteModule,
    PresetModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/transportDB'),
    PointTimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
