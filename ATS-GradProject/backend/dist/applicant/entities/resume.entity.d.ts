import { Applicant } from './applicant.entity';
export declare class Resume {
    id: number;
    education: string;
    language: string;
    experience: string;
    extracted_keywords: string;
    resume_data: string;
    applicant: Applicant;
}
