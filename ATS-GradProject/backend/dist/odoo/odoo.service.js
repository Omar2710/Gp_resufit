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
exports.OdooService = void 0;
const common_1 = require("@nestjs/common");
const odoo_connector_1 = require("./odoo-connector");
let OdooService = class OdooService {
    constructor() {
        this.odooConnector = new odoo_connector_1.default({
            url: 'http://localhost',
            port: 8069,
            db: 'odoo-resufit',
            username: 'donia2004436@miuegypt.edu.eg',
            password: 'admin',
        });
    }
    async getEmployees() {
        const inParams = [
            [],
            [
                '__last_update',
                'activity_exception_decoration',
                'activity_exception_icon',
                'activity_state',
                'activity_summary',
                'activity_type_icon',
                'activity_type_id',
                'id',
                'hr_presence_state',
                'user_id',
                'user_partner_id',
                'hr_icon_display',
                'show_hr_icon_display',
                'image_128',
                'image_1024',
                'name',
                'job_title',
                'category_ids',
                'work_email',
                'work_phone',
                'activity_ids',
            ],
        ];
        const params = [inParams];
        await this.odooConnector.connect();
        const hrData = await this.odooConnector.execute_kw('hr.employee', 'search_read', params);
        console.log(hrData);
        return hrData;
    }
    async getJobOpenings() {
        const inParams = [
            [],
            [],
        ];
        const params = [inParams];
        await this.odooConnector.connect();
        const hrData = await this.odooConnector.execute_kw('hr.job', 'search_read', params);
        console.log(hrData);
        return hrData;
    }
};
exports.OdooService = OdooService;
exports.OdooService = OdooService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OdooService);
//# sourceMappingURL=odoo.service.js.map