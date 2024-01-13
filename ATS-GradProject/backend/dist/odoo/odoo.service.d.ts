import OdooConnector from './odoo-connector';
export declare class OdooService {
    odooConnector: OdooConnector;
    constructor();
    getEmployees(): Promise<unknown>;
    getJobOpenings(): Promise<unknown>;
}
