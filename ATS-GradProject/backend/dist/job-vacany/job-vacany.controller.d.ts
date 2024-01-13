import { JobVacanyService } from './job-vacany.service';
import { CreateJobVacanyDto } from './dto/create-job-vacany.dto';
import { UpdateJobVacanyDto } from './dto/update-job-vacany.dto';
export declare class JobVacanyController {
    private readonly jobVacanyService;
    constructor(jobVacanyService: JobVacanyService);
    create(createJobVacanyDto: CreateJobVacanyDto): Promise<void>;
    findAll(): Promise<import("./entities/job-vacany.entity").JobVacany[]>;
    findOne(id: string): Promise<import("./entities/job-vacany.entity").JobVacany>;
    update(id: string, updateJobVacanyDto: UpdateJobVacanyDto): Promise<{
        title?: string;
        description?: string;
        skills?: any[];
        education?: string;
        yearsOfExperience?: string;
        language?: string;
        id: number;
    } & import("./entities/job-vacany.entity").JobVacany>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
