import { Resume } from './resume.entity';
export declare class Applicant {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    resumes: Resume[];
}
