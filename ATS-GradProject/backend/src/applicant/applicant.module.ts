import { Module } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { ApplicantController } from './applicant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applicant } from './entities/applicant.entity';
import { Resume } from './entities/resume.entity';
import { ResumeController } from './resume.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Applicant, Resume])],
  exports: [TypeOrmModule],
  controllers: [ApplicantController, ResumeController],
  providers: [ApplicantService],
})
export class ApplicantModule {}
