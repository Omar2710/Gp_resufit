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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobVacanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const job_vacany_entity_1 = require("./entities/job-vacany.entity");
const typeorm_2 = require("typeorm");
const job_vacany_tech_skill_entity_1 = require("./entities/job-vacany-tech-skill.entity");
let JobVacanyService = class JobVacanyService {
    constructor(jobVacancyRepository, jobVacancyTechSkillRepository) {
        this.jobVacancyRepository = jobVacancyRepository;
        this.jobVacancyTechSkillRepository = jobVacancyTechSkillRepository;
    }
    async create({ title, education, language, yearsOfExperience, description, skills, }) {
        const newJobVacancy = this.jobVacancyRepository.create({
            title,
            education,
            language,
            yearsOfExperience,
            jobDescription: description,
        });
        await this.jobVacancyRepository.save(newJobVacancy);
        skills.forEach(async (skill) => {
            const newSkill = this.jobVacancyTechSkillRepository.create({
                job_vacancy: newJobVacancy,
                ...skill,
            });
            await this.jobVacancyTechSkillRepository.save(newSkill);
        });
    }
    async findAll() {
        return await this.jobVacancyRepository.find();
    }
    async findOne(id) {
        return await this.jobVacancyRepository.findOne({ where: { id } });
    }
    async update(id, updateJobVacanyDto) {
        await this.findOne(id);
        return this.jobVacancyRepository.save({ id, ...updateJobVacanyDto });
    }
    async remove(id) {
        return await this.jobVacancyRepository.delete({ id });
    }
};
exports.JobVacanyService = JobVacanyService;
exports.JobVacanyService = JobVacanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(job_vacany_entity_1.JobVacany)),
    __param(1, (0, typeorm_1.InjectRepository)(job_vacany_tech_skill_entity_1.JobVacanyTechSkill)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], JobVacanyService);
//# sourceMappingURL=job-vacany.service.js.map