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
exports.JogadoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let JogadoresService = class JogadoresService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const jogador = await this.prisma.jogadores.create({
            data: {
                nome_jogador: data.nome_jogador,
                posicao: data.posicao,
                id_time: data.id_time,
            },
        });
        return this.prisma.jogadores.findUnique({
            where: { id_jogador: jogador.id_jogador },
            include: { times: true },
        });
    }
    async findAll() {
        return this.prisma.jogadores.findMany({
            include: { times: true },
        });
    }
    async findOne(id) {
        const jogador = await this.prisma.jogadores.findUnique({
            where: { id_jogador: id },
            include: { times: true },
        });
        if (!jogador) {
            throw new common_1.NotFoundException(`Jogador com ID ${id} não encontrado`);
        }
        return jogador;
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.jogadores.update({
            where: { id_jogador: id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.jogadores.delete({
            where: { id_jogador: id },
        });
    }
};
exports.JogadoresService = JogadoresService;
exports.JogadoresService = JogadoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JogadoresService);
//# sourceMappingURL=jogadores.service.js.map