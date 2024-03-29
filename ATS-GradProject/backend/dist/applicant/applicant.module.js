"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantModule = void 0;
const common_1 = require("@nestjs/common");
const applicant_service_1 = require("./applicant.service");
const applicant_controller_1 = require("./applicant.controller");
const typeorm_1 = require("@nestjs/typeorm");
const applicant_entity_1 = require("./entities/applicant.entity");
const resume_entity_1 = require("./entities/resume.entity");
const resume_controller_1 = require("./resume.controller");
let ApplicantModule = class ApplicantModule {
};
exports.ApplicantModule = ApplicantModule;
exports.ApplicantModule = ApplicantModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([applicant_entity_1.Applicant, resume_entity_1.Resume])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [applicant_controller_1.ApplicantController, resume_controller_1.ResumeController],
        providers: [applicant_service_1.ApplicantService],
    })
], ApplicantModule);
//# sourceMappingURL=applicant.module.js.map