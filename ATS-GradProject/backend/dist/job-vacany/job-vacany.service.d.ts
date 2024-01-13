import { CreateJobVacanyDto } from './dto/create-job-vacany.dto';
import { UpdateJobVacanyDto } from './dto/update-job-vacany.dto';
import { JobVacany } from './entities/job-vacany.entity';
import { Repository } from 'typeorm';
import { JobVacanyTechSkill } from './entities/job-vacany-tech-skill.entity';
export declare class JobVacanyService {
    private jobVacancyRepository;
    private jobVacancyTechSkillRepository;
    constructor(jobVacancyRepository: Repository<JobVacany>, jobVacancyTechSkillRepository: Repository<JobVacanyTechSkill>);
    create({ title, education, language, yearsOfExperience, description, skills, }: CreateJobVacanyDto): Promise<void>;
    findAll(): Promise<JobVacany[]>;
    findOne(id: number): Promise<JobVacany>;
    update(id: number, updateJobVacanyDto: UpdateJobVacanyDto): Promise<{
        title?: string;
        description?: string;
        skills?: any[];
        education?: string;
        yearsOfExperience?: string;
        language?: string;
        id: number;
    } & JobVacany>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
