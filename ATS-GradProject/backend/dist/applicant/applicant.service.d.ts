import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
export declare class ApplicantService {
    create(createApplicantDto: CreateApplicantDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateApplicantDto: UpdateApplicantDto): string;
    remove(id: number): string;
}
