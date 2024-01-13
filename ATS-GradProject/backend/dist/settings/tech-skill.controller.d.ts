import { CreateTechSkillDto } from './dto/create-tech-skill.dto';
import { TechSkillService } from './tech-skill.service';
export declare class TechSkillController {
    private readonly techSkillService;
    constructor(techSkillService: TechSkillService);
    create(createTechSkillDto: CreateTechSkillDto): Promise<void>;
    findAll(): Promise<import("./entities/tech-skill.entity").TechSkill[]>;
}
