"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobVacanyModule = void 0;
const common_1 = require("@nestjs/common");
const job_vacany_service_1 = require("./job-vacany.service");
const job_vacany_controller_1 = require("./job-vacany.controller");
const job_vacany_tech_skill_entity_1 = require("./entities/job-vacany-tech-skill.entity");
const job_vacany_entity_1 = require("./entities/job-vacany.entity");
const typeorm_1 = require("@nestjs/typeorm");
const job_vacancy_screening_question_entity_1 = require("./entities/job-vacancy-screening-question.entity");
let JobVacanyModule = class JobVacanyModule {
};
exports.JobVacanyModule = JobVacanyModule;
exports.JobVacanyModule = JobVacanyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                job_vacany_tech_skill_entity_1.JobVacanyTechSkill,
                job_vacany_entity_1.JobVacany,
                job_vacancy_screening_question_entity_1.JobVacanyScreeningQuestions,
            ]),
        ],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [job_vacany_controller_1.JobVacanyController],
        providers: [job_vacany_service_1.JobVacanyService],
    })
], JobVacanyModule);
//# sourceMappingURL=job-vacany.module.js.map