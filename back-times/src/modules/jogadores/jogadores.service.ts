import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { jogadores } from '@prisma/client';
import { CreateJogadorDto } from './dtos/create-jogador.dto';
import { UpdateJogadorDto } from './dtos/update-jogador.dto';

@Injectable()
export class JogadoresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateJogadorDto): Promise<jogadores> {
    const jogador = await this.prisma.jogadores.create({
      data: {
        nome_jogador: data.nome_jogador,
        posicao: data.posicao,
        id_time: data.id_time,
      },
    });

    // Inclui o time relacionado ao jogador criado
    return this.prisma.jogadores.findUnique({
      where: { id_jogador: jogador.id_jogador },
      include: { times: true },
    });
  }

  async findAll(): Promise<jogadores[]> {
    return this.prisma.jogadores.findMany({
      include: { times: true },
    });
  }

  async findOne(id: number): Promise<jogadores> {
    const jogador = await this.prisma.jogadores.findUnique({
      where: { id_jogador: id },
      include: { times: true },
    });

    if (!jogador) {
      throw new NotFoundException(`Jogador com ID ${id} não encontrado`);
    }

    return jogador;
  }

  async update(id: number, data: UpdateJogadorDto): Promise<jogadores> {
    await this.findOne(id);

    return this.prisma.jogadores.update({
      where: { id_jogador: id },
      data,
    });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);

    await this.prisma.jogadores.delete({
      where: { id_jogador: id },
    });
  }
}
