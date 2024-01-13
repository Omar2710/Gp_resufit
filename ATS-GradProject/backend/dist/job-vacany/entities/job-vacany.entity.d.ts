import { JobVacanyTechSkill } from './job-vacany-tech-skill.entity';
import { Resume } from 'src/applicant/entities/resume.entity';
export declare class JobVacany {
    id: number;
    title: string;
    education: string;
    language: string;
    yearsOfExperience: string;
    jobDescription: string;
    job_vacancy_tech_skill: JobVacanyTechSkill[];
    resumes: Resume[];
}
