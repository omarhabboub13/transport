import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PointsModule } from './points/points.module';
import { TimesModule } from './times/times.module';
import { LinesModule } from './lines/lines.module';
import { DriverModule } from './driver/driver.module';
import { BusModule } from './bus/bus.module';
import { StudentModule } from './student/student.module';
import { TripModule } from './trip/trip.module';
import { VoteModule } from './vote/vote.module';
import { PointTripModule } from './point_trip/point_trip.module';
import { PresetModule } from './preset/preset.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PointsModule,
    TimesModule,
    LinesModule,
    DriverModule,
    BusModule,
    StudentModule,
    TripModule,
    VoteModule,
    PointTripModule,
    PresetModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/transportDB'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
