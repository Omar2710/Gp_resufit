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
exports.OdooController = void 0;
const common_1 = require("@nestjs/common");
const odoo_service_1 = require("./odoo.service");
let OdooController = class OdooController {
    constructor(odooService) {
        this.odooService = odooService;
    }
    getEmployees() {
        return this.odooService.getEmployees();
    }
    getJobOpenings() {
        return this.odooService.getJobOpenings();
    }
};
exports.OdooController = OdooController;
__decorate([
    (0, common_1.Get)('employees'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OdooController.prototype, "getEmployees", null);
__decorate([
    (0, common_1.Get)('job-openings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OdooController.prototype, "getJobOpenings", null);
exports.OdooController = OdooController = __decorate([
    (0, common_1.Controller)('odoo'),
    __metadata("design:paramtypes", [odoo_service_1.OdooService])
], OdooController);
//# sourceMappingURL=odoo.controller.js.map