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
exports.JobVacanyTechSkill = void 0;
const typeorm_1 = require("typeorm");
const job_vacany_entity_1 = require("./job-vacany.entity");
let JobVacanyTechSkill = class JobVacanyTechSkill {
};
exports.JobVacanyTechSkill = JobVacanyTechSkill;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], JobVacanyTechSkill.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobVacanyTechSkill.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], JobVacanyTechSkill.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => job_vacany_entity_1.JobVacany, (d) => d.job_vacancy_tech_skill),
    __metadata("design:type", job_vacany_entity_1.JobVacany)
], JobVacanyTechSkill.prototype, "job_vacancy", void 0);
exports.JobVacanyTechSkill = JobVacanyTechSkill = __decorate([
    (0, typeorm_1.Entity)()
], JobVacanyTechSkill);
//# sourceMappingURL=job-vacany-tech-skill.entity.js.map