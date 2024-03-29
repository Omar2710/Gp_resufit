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
exports.ApplicantController = void 0;
const common_1 = require("@nestjs/common");
const applicant_service_1 = require("./applicant.service");
const create_applicant_dto_1 = require("./dto/create-applicant.dto");
const update_applicant_dto_1 = require("./dto/update-applicant.dto");
let ApplicantController = class ApplicantController {
    constructor(applicantService) {
        this.applicantService = applicantService;
    }
    create(createApplicantDto) {
        return this.applicantService.create(createApplicantDto);
    }
    findAll() {
        return this.applicantService.findAll();
    }
    findOne(id) {
        return this.applicantService.findOne(+id);
    }
    update(id, updateApplicantDto) {
        return this.applicantService.update(+id, updateApplicantDto);
    }
    remove(id) {
        return this.applicantService.remove(+id);
    }
};
exports.ApplicantController = ApplicantController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_applicant_dto_1.CreateApplicantDto]),
    __metadata("design:returntype", void 0)
], ApplicantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApplicantController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApplicantController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_applicant_dto_1.UpdateApplicantDto]),
    __metadata("design:returntype", void 0)
], ApplicantController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApplicantController.prototype, "remove", null);
exports.ApplicantController = ApplicantController = __decorate([
    (0, common_1.Controller)('applicant'),
    __metadata("design:paramtypes", [applicant_service_1.ApplicantService])
], ApplicantController);
//# sourceMappingURL=applicant.controller.js.map