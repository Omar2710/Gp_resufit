import { Injectable } from '@nestjs/common';
import { CreateOdooDto } from './dto/create-odoo.dto';
import { UpdateOdooDto } from './dto/update-odoo.dto';
import OdooConnector from './odoo-connector';

@Injectable()
export class OdooService {
  odooConnector: OdooConnector;
  constructor() {
    this.odooConnector = new OdooConnector({
      url: 'http://localhost',
      port: 8069,
      db: 'odoo-resufit',
      username: 'donia2004436@miuegypt.edu.eg',
      password: 'admin',
    });
  }

  async getEmployees() {
    const inParams = [
      [], // domain
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
    const hrData = await this.odooConnector.execute_kw(
      'hr.employee',
      'search_read',
      params,
    );
    console.log(hrData);
    return hrData;
  }

  async getJobOpenings() {
    const inParams = [
      [], // domain
      [],
    ];
    const params = [inParams];
    await this.odooConnector.connect();
    const hrData = await this.odooConnector.execute_kw(
      'hr.job',
      'search_read',
      params,
    );
    console.log(hrData);
    return hrData;
  }
}
