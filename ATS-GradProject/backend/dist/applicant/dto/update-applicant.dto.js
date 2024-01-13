"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApplicantDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_applicant_dto_1 = require("./create-applicant.dto");
class UpdateApplicantDto extends (0, mapped_types_1.PartialType)(create_applicant_dto_1.CreateApplicantDto) {
}
exports.UpdateApplicantDto = UpdateApplicantDto;
//# sourceMappingURL=update-applicant.dto.js.map