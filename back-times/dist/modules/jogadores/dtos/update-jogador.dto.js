"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJogadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_jogador_dto_1 = require("./create-jogador.dto");
class UpdateJogadorDto extends (0, mapped_types_1.PartialType)(create_jogador_dto_1.CreateJogadorDto) {
}
exports.UpdateJogadorDto = UpdateJogadorDto;
//# sourceMappingURL=update-jogador.dto.js.map