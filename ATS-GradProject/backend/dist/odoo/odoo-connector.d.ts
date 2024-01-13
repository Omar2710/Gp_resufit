export default class Odoo {
    config: any;
    host: string;
    port: string;
    db: string;
    username: string;
    password: string;
    secure: boolean;
    uid: number;
    url: string;
    constructor(config?: any);
    _getClient(path: any): any;
    _methodCall(client: any, method: any, params?: any[]): Promise<unknown>;
    connect(): Promise<any>;
    execute_kw(model: any, method: any, params: any): Promise<unknown>;
}
