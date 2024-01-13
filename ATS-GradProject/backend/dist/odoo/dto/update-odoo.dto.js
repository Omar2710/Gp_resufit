"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOdooDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_odoo_dto_1 = require("./create-odoo.dto");
class UpdateOdooDto extends (0, mapped_types_1.PartialType)(create_odoo_dto_1.CreateOdooDto) {
}
exports.UpdateOdooDto = UpdateOdooDto;
//# sourceMappingURL=update-odoo.dto.js.map