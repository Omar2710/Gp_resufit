import { Injectable } from '@nestjs/common';
import { CreateJobVacanyDto } from './dto/create-job-vacany.dto';
import { UpdateJobVacanyDto } from './dto/update-job-vacany.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobVacany } from './entities/job-vacany.entity';
import { Repository } from 'typeorm';
import { JobVacanyTechSkill } from './entities/job-vacany-tech-skill.entity';

@Injectable()
export class JobVacanyService {
  constructor(
    @InjectRepository(JobVacany)
    private jobVacancyRepository: Repository<JobVacany>,
    @InjectRepository(JobVacanyTechSkill)
    private jobVacancyTechSkillRepository: Repository<JobVacanyTechSkill>,
  ) {}
  async create({
    title,
    education,
    language,
    yearsOfExperience,
    description,
    skills,
  }: CreateJobVacanyDto) {
    const newJobVacancy = this.jobVacancyRepository.create({
      title,
      education,
      language,
      yearsOfExperience,
      jobDescription: description,
    });
    await this.jobVacancyRepository.save(newJobVacancy);

    // Add skills
    skills.forEach(async (skill) => {
      const newSkill = this.jobVacancyTechSkillRepository.create({
        job_vacancy: newJobVacancy,
        ...skill,
      });
      await this.jobVacancyTechSkillRepository.save(newSkill);
    });
  }

  async findAll() {
    return await this.jobVacancyRepository.find();
  }

  async findOne(id: number) {
    return await this.jobVacancyRepository.findOne({ where: { id } });
  }

  async update(id: number, updateJobVacanyDto: UpdateJobVacanyDto) {
    await this.findOne(id);

    return this.jobVacancyRepository.save({ id, ...updateJobVacanyDto });
  }

  async remove(id: number) {
    return await this.jobVacancyRepository.delete({ id });
  }
}
