import { JobVacanyScreeningQuestions } from 'src/job-vacany/entities/job-vacancy-screening-question.entity';
export declare class ScreeningQuestion {
    id: number;
    question: string;
    key_answer: string;
    job_vacancy_screening_questions: JobVacanyScreeningQuestions[];
}
