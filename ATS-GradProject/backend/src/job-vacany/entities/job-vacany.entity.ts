import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobVacanyTechSkill } from './job-vacany-tech-skill.entity';
import { Resume } from 'src/applicant/entities/resume.entity';

@Entity()
export class JobVacany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  education: string;

  @Column()
  language: string;

  @Column()
  yearsOfExperience: string;

  @Column()
  jobDescription: string;

  @OneToMany(() => JobVacanyTechSkill, (d) => d.job_vacancy)
  job_vacancy_tech_skill: JobVacanyTechSkill[];

  @ManyToMany(() => Resume)
  @JoinTable()
  resumes: Resume[];
}
