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
exports.JobVacanyController = void 0;
const common_1 = require("@nestjs/common");
const job_vacany_service_1 = require("./job-vacany.service");
const create_job_vacany_dto_1 = require("./dto/create-job-vacany.dto");
const update_job_vacany_dto_1 = require("./dto/update-job-vacany.dto");
let JobVacanyController = class JobVacanyController {
    constructor(jobVacanyService) {
        this.jobVacanyService = jobVacanyService;
    }
    create(createJobVacanyDto) {
        return this.jobVacanyService.create(createJobVacanyDto);
    }
    findAll() {
        return this.jobVacanyService.findAll();
    }
    findOne(id) {
        return this.jobVacanyService.findOne(+id);
    }
    update(id, updateJobVacanyDto) {
        return this.jobVacanyService.update(+id, updateJobVacanyDto);
    }
    remove(id) {
        return this.jobVacanyService.remove(+id);
    }
};
exports.JobVacanyController = JobVacanyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_vacany_dto_1.CreateJobVacanyDto]),
    __metadata("design:returntype", void 0)
], JobVacanyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobVacanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobVacanyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_job_vacany_dto_1.UpdateJobVacanyDto]),
    __metadata("design:returntype", void 0)
], JobVacanyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobVacanyController.prototype, "remove", null);
exports.JobVacanyController = JobVacanyController = __decorate([
    (0, common_1.Controller)('job-vacany'),
    __metadata("design:paramtypes", [job_vacany_service_1.JobVacanyService])
], JobVacanyController);
//# sourceMappingURL=job-vacany.controller.js.map