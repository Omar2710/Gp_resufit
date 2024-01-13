import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { JobVacanyService } from './job-vacany.service';
import { CreateJobVacanyDto } from './dto/create-job-vacany.dto';
import { UpdateJobVacanyDto } from './dto/update-job-vacany.dto';

@Controller('job-vacany')
export class JobVacanyController {
  constructor(private readonly jobVacanyService: JobVacanyService) {}

  @Post()
  create(@Body() createJobVacanyDto: CreateJobVacanyDto) {
    return this.jobVacanyService.create(createJobVacanyDto);
  }

  @Get()
  findAll() {
    return this.jobVacanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobVacanyService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateJobVacanyDto: UpdateJobVacanyDto,
  ) {
    return this.jobVacanyService.update(+id, updateJobVacanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobVacanyService.remove(+id);
  }
}
