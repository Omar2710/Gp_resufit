import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
export declare class ApplicantController {
    private readonly applicantService;
    constructor(applicantService: ApplicantService);
    create(createApplicantDto: CreateApplicantDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateApplicantDto: UpdateApplicantDto): string;
    remove(id: string): string;
}
