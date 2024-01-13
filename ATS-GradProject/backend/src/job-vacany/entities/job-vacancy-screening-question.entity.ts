import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ScreeningQuestion } from 'src/settings/entities/screening-question.entity';

@Entity()
export class JobVacanyScreeningQuestions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @OneToMany(() => ScreeningQuestion, (d) => d.job_vacancy_screening_questions)
  screening_questions: ScreeningQuestion[];
}
