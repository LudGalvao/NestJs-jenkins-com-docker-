import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { JogadoresService } from './jogadores.service';
import { CreateJogadorDto } from './dtos/create-jogador.dto';
import { UpdateJogadorDto } from './dtos/update-jogador.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('jogadores')
@Controller('jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo jogador' })
  @ApiResponse({ status: 201, description: 'Jogador criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async create(@Body() createJogadorDto: CreateJogadorDto) {
    return this.jogadoresService.create(createJogadorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtém a lista de jogadores' })
  @ApiResponse({ status: 200, description: 'Lista de jogadores retornada com sucesso.' })
  async findAll() {
    return this.jogadoresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém um jogador pelo ID' })
  @ApiResponse({ status: 200, description: 'Jogador retornado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Jogador não encontrado.' })
  async findOne(@Param('id') id: number) {
    return this.jogadoresService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um jogador' })
  @ApiResponse({ status: 200, description: 'Jogador atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Jogador não encontrado.' })
  async update(@Param('id') id: number, @Body() updateJogadorDto: UpdateJogadorDto) {
    return this.jogadoresService.update(id, updateJogadorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um jogador' })
  @ApiResponse({ status: 200, description: 'Jogador removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Jogador não encontrado.' })
  async remove(@Param('id') id: number) {
    return this.jogadoresService.remove(id);
  }
}
