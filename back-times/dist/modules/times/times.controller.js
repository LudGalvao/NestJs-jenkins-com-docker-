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
exports.TimesController = void 0;
const common_1 = require("@nestjs/common");
const times_service_1 = require("./times.service");
const create_time_dto_1 = require("./dtos/create-time.dto");
const update_time_dto_1 = require("./dtos/update-time.dto");
const swagger_1 = require("@nestjs/swagger");
let TimesController = class TimesController {
    constructor(timesService) {
        this.timesService = timesService;
    }
    async create(createTimeDto) {
        return this.timesService.create(createTimeDto);
    }
    async findAll() {
        return this.timesService.findAll();
    }
    async findOne(id) {
        return this.timesService.findOne(+id);
    }
    async update(id, updateTimeDto) {
        return this.timesService.update(+id, updateTimeDto);
    }
    async remove(id) {
        return this.timesService.remove(+id);
    }
};
exports.TimesController = TimesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_time_dto_1.CreateTimeDto]),
    __metadata("design:returntype", Promise)
], TimesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TimesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_time_dto_1.UpdateTimeDto]),
    __metadata("design:returntype", Promise)
], TimesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimesController.prototype, "remove", null);
exports.TimesController = TimesController = __decorate([
    (0, swagger_1.ApiTags)('times'),
    (0, common_1.Controller)('times'),
    __metadata("design:paramtypes", [times_service_1.TimesService])
], TimesController);
//# sourceMappingURL=times.controller.js.map