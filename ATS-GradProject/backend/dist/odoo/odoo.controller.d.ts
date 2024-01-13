import { OdooService } from './odoo.service';
export declare class OdooController {
    private readonly odooService;
    constructor(odooService: OdooService);
    getEmployees(): Promise<unknown>;
    getJobOpenings(): Promise<unknown>;
}
