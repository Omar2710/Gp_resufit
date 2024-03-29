"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const applicant_module_1 = require("./applicant/applicant.module");
const typeorm_1 = require("@nestjs/typeorm");
const admin_module_1 = require("./admin/admin.module");
const settings_module_1 = require("./settings/settings.module");
const job_vacany_module_1 = require("./job-vacany/job-vacany.module");
const odoo_module_1 = require("./odoo/odoo.module");
const tech_skill_service_1 = require("./settings/tech-skill.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            applicant_module_1.ApplicantModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'ats_db',
                autoLoadEntities: true,
                synchronize: true,
            }),
            admin_module_1.AdminModule,
            settings_module_1.SettingsModule,
            job_vacany_module_1.JobVacanyModule,
            odoo_module_1.OdooModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, tech_skill_service_1.TechSkillService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map