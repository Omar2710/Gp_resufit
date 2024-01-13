import { Module } from '@nestjs/common';
import { JobVacanyService } from './job-vacany.service';
import { JobVacanyController } from './job-vacany.controller';
import { JobVacanyTechSkill } from './entities/job-vacany-tech-skill.entity';
import { JobVacany } from './entities/job-vacany.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobVacanyScreeningQuestions } from './entities/job-vacancy-screening-question.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JobVacanyTechSkill,
      JobVacany,
      JobVacanyScreeningQuestions,
    ]),
  ],
  exports: [TypeOrmModule],
  controllers: [JobVacanyController],
  providers: [JobVacanyService],
})
export class JobVacanyModule {}
