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
exports.ScreeningQuestion = void 0;
const job_vacancy_screening_question_entity_1 = require("../../job-vacany/entities/job-vacancy-screening-question.entity");
const typeorm_1 = require("typeorm");
let ScreeningQuestion = class ScreeningQuestion {
};
exports.ScreeningQuestion = ScreeningQuestion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ScreeningQuestion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScreeningQuestion.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScreeningQuestion.prototype, "key_answer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => job_vacancy_screening_question_entity_1.JobVacanyScreeningQuestions, (d) => d.screening_questions),
    __metadata("design:type", Array)
], ScreeningQuestion.prototype, "job_vacancy_screening_questions", void 0);
exports.ScreeningQuestion = ScreeningQuestion = __decorate([
    (0, typeorm_1.Entity)()
], ScreeningQuestion);
//# sourceMappingURL=screening-question.entity.js.map