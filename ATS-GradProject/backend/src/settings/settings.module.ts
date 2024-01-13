import { Module } from '@nestjs/common';
import { TechSkillController } from './tech-skill.controller';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechSkill } from './entities/tech-skill.entity';
import { Company } from './entities/company.entity';
import { ScreeningQuestion } from './entities/screening-question.entity';
import { TechSkillService } from './tech-skill.service';

@Module({
  imports: [TypeOrmModule.forFeature([TechSkill, Company, ScreeningQuestion])],
  exports: [TypeOrmModule],
  controllers: [TechSkillController, CompanyController],
  providers: [TechSkillService],
})
export class SettingsModule {}
