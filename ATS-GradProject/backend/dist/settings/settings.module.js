"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsModule = void 0;
const common_1 = require("@nestjs/common");
const tech_skill_controller_1 = require("./tech-skill.controller");
const company_controller_1 = require("./company.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tech_skill_entity_1 = require("./entities/tech-skill.entity");
const company_entity_1 = require("./entities/company.entity");
const screening_question_entity_1 = require("./entities/screening-question.entity");
const tech_skill_service_1 = require("./tech-skill.service");
let SettingsModule = class SettingsModule {
};
exports.SettingsModule = SettingsModule;
exports.SettingsModule = SettingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tech_skill_entity_1.TechSkill, company_entity_1.Company, screening_question_entity_1.ScreeningQuestion])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [tech_skill_controller_1.TechSkillController, company_controller_1.CompanyController],
        providers: [tech_skill_service_1.TechSkillService],
    })
], SettingsModule);
//# sourceMappingURL=settings.module.js.map