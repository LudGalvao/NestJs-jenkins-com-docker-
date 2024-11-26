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
exports.TimesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let TimesService = class TimesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.times.create({ data });
    }
    async findAll() {
        return this.prisma.times.findMany({
            include: { jogadores: true },
        });
    }
    async findOne(id) {
        const time = await this.prisma.times.findUnique({
            where: { id_time: id },
            include: { jogadores: true },
        });
        if (!time) {
            throw new common_1.NotFoundException(`Time com ID ${id} não encontrado`);
        }
        return time;
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.times.update({
            where: { id_time: id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.times.delete({
            where: { id_time: id },
        });
    }
};
exports.TimesService = TimesService;
exports.TimesService = TimesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TimesService);
//# sourceMappingURL=times.service.js.map