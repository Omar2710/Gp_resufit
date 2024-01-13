import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Applicant } from './applicant.entity';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  education: string;

  @Column()
  language: string;

  @Column()
  experience: string;
  @Column()
  extracted_keywords: string;

  @Column()
  resume_data: string;

  @ManyToOne(() => Applicant, (d) => d.resumes)
  applicant: Applicant;
}
