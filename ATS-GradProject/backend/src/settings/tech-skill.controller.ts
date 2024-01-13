import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTechSkillDto } from './dto/create-tech-skill.dto';
import { TechSkillService } from './tech-skill.service';

@Controller('tech-skill')
export class TechSkillController {
  constructor(private readonly techSkillService: TechSkillService) {}

  @Post()
  create(@Body() createTechSkillDto: CreateTechSkillDto) {
    return this.techSkillService.create(createTechSkillDto);
  }

  @Get()
  findAll() {
    return this.techSkillService.findAll();
  }
}
