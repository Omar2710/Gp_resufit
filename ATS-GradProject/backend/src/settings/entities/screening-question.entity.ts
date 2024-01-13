import { JobVacanyScreeningQuestions } from 'src/job-vacany/entities/job-vacancy-screening-question.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ScreeningQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  key_answer: string;

  @ManyToOne(() => JobVacanyScreeningQuestions, (d) => d.screening_questions)
  job_vacancy_screening_questions: JobVacanyScreeningQuestions[];
}
