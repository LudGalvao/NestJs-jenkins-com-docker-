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
exports.JogadoresController = void 0;
const common_1 = require("@nestjs/common");
const jogadores_service_1 = require("./jogadores.service");
const create_jogador_dto_1 = require("./dtos/create-jogador.dto");
const update_jogador_dto_1 = require("./dtos/update-jogador.dto");
const swagger_1 = require("@nestjs/swagger");
let JogadoresController = class JogadoresController {
    constructor(jogadoresService) {
        this.jogadoresService = jogadoresService;
    }
    async create(createJogadorDto) {
        return this.jogadoresService.create(createJogadorDto);
    }
    async findAll() {
        return this.jogadoresService.findAll();
    }
    async findOne(id) {
        return this.jogadoresService.findOne(id);
    }
    async update(id, updateJogadorDto) {
        return this.jogadoresService.update(id, updateJogadorDto);
    }
    async remove(id) {
        return this.jogadoresService.remove(id);
    }
};
exports.JogadoresController = JogadoresController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um novo jogador' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Jogador criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_jogador_dto_1.CreateJogadorDto]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtém a lista de jogadores' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de jogadores retornada com sucesso.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtém um jogador pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Jogador retornado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Jogador não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza um jogador' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Jogador atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Jogador não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_jogador_dto_1.UpdateJogadorDto]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove um jogador' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Jogador removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Jogador não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "remove", null);
exports.JogadoresController = JogadoresController = __decorate([
    (0, swagger_1.ApiTags)('jogadores'),
    (0, common_1.Controller)('jogadores'),
    __metadata("design:paramtypes", [jogadores_service_1.JogadoresService])
], JogadoresController);
//# sourceMappingURL=jogadores.controller.js.map