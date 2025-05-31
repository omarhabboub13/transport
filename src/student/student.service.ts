  import {
    ConflictException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { Student } from './student.schema';
  import { Model, Types } from 'mongoose';
  import { CreateStudentDto } from './DTO/create-student.dto';
  import { createAuthDTO } from '../auth/dto/auth.dto';
  import * as bcryptt from 'bcryptjs';

  @Injectable()
  export class StudentService {
    constructor(
      @InjectModel(Student.name) private readonly studentModel: Model<Student>,
    ) {}
    async fetchAllStudents() {
      const students = await this.studentModel.find().exec();

      return students.map((student) => ({
        id: student._id,
        name: student.name,
        phone: student.phone,
        PresetId: student.presetId,
      }));
    }
    createstudent(studentBody: CreateStudentDto) {
      const newstudent = new this.studentModel({
        name: studentBody.name,
        phone: studentBody.phone,
        password: studentBody.password,
        presetId: new Types.ObjectId(studentBody.presetId),
      });
      newstudent.save();
      return {
        id: newstudent._id,
        name: newstudent.name,
        phone: newstudent.phone,
        PresetId: newstudent.presetId,
      };
    }
    async deletestudent(id: string) {
      const del = await this.studentModel.findByIdAndDelete(id).exec();
      if (del) {
        return 'deleted successfully';
      } else {
        throw new NotFoundException('err');
      }
    }
    async getoneuser(id: string) {
      const user = await this.studentModel.findById(id).exec();
      if (user) {
        return user;
      } else {
        throw new NotFoundException('email not found');
      }
    }
    async getonebyphone(userdto: createAuthDTO): Promise<Student> {
      const phone = await this.studentModel.findOne({ phone: userdto.phone });
      if (phone) {
        return phone;
      } else {
        throw new ConflictException('student not found');
      }
    }
    async updatestudent(id: string, updated: CreateStudentDto) {
      const salt = bcryptt.genSaltSync(12);
      const hashedpassword = bcryptt.hashSync(updated.password, salt);

      const updatedStudent = await this.studentModel
        .findByIdAndUpdate(
          id,
          {
            name: updated.name,
            phone: updated.phone,
            password: hashedpassword,
            presetId: new Types.ObjectId(updated.presetId),
          },
          { new: true }, // Optional: returns the updated document
        )
        .exec();

      if (updatedStudent) {
        return 'updated successfully';
      } else {
        throw new NotFoundException('Student not found');
      }
    }
    async getStudentsWithPresets() {
      const students = await this.studentModel
        .find()
        .populate('presetId')
        .exec();

      const details = students.map((student) => ({
        student: {
          _id: student._id,
          name: student.name,
          phone: student.phone,
        },
        preset: student.presetId, // Will be an object or null
      }));

      return { details };
    }
  }
