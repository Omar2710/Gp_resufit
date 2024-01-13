"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobVacany = void 0;
const typeorm_1 = require("typeorm");
const job_vacany_tech_skill_entity_1 = require("./job-vacany-tech-skill.entity");
const resume_entity_1 = require("../../applicant/entities/resume.entity");
let JobVacany = class JobVacany {
};
exports.JobVacany = JobVacany;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], JobVacany.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobVacany.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobVacany.prototype, "education", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobVacany.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobVacany.prototype, "yearsOfExperience", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobVacany.prototype, "jobDescription", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => job_vacany_tech_skill_entity_1.JobVacanyTechSkill, (d) => d.job_vacancy),
    __metadata("design:type", Array)
], JobVacany.prototype, "job_vacancy_tech_skill", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => resume_entity_1.Resume),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], JobVacany.prototype, "resumes", void 0);
exports.JobVacany = JobVacany = __decorate([
    (0, typeorm_1.Entity)()
], JobVacany);
//# sourceMappingURL=job-vacany.entity.js.map