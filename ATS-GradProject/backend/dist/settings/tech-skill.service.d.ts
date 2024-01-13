import { TechSkill } from './entities/tech-skill.entity';
import { Repository } from 'typeorm';
import { CreateTechSkillDto } from './dto/create-tech-skill.dto';
export declare class TechSkillService {
    private TechSkillRepository;
    constructor(TechSkillRepository: Repository<TechSkill>);
    create({ title }: CreateTechSkillDto): Promise<void>;
    findAll(): Promise<TechSkill[]>;
}
