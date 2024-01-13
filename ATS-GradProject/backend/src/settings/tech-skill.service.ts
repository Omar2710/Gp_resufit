import { Injectable } from '@nestjs/common';
import { TechSkill } from './entities/tech-skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTechSkillDto } from './dto/create-tech-skill.dto';

@Injectable()
export class TechSkillService {
  constructor(
    @InjectRepository(TechSkill)
    private TechSkillRepository: Repository<TechSkill>,
  ) {}
  async create({ title }: CreateTechSkillDto) {
    const newTechSkill = this.TechSkillRepository.create({
      title,
    });
    await this.TechSkillRepository.save(newTechSkill);
  }
  async findAll() {
    return await this.TechSkillRepository.find();
  }
}
