import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Resume } from './resume.entity';

@Entity()
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @OneToMany(() => Resume, (resume) => resume.applicant)
  resumes: Resume[];
}
