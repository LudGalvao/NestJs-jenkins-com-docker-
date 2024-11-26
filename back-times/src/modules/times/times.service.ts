import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { times } from '@prisma/client'; // Modelo do Prisma
import { CreateTimeDto } from './dtos/create-time.dto';
import { UpdateTimeDto } from './dtos/update-time.dto';

@Injectable()
export class TimesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTimeDto): Promise<times> {
    return this.prisma.times.create({ data });
  }

  async findAll(): Promise<times[]> {
    return this.prisma.times.findMany({
      include: { jogadores: true }, // Inclui os jogadores relacionados
    });
  }

  async findOne(id: number): Promise<times> {
    const time = await this.prisma.times.findUnique({
      where: { id_time: id },
      include: { jogadores: true },
    });

    if (!time) {
      throw new NotFoundException(`Time com ID ${id} não encontrado`);
    }

    return time;
  }

  async update(id: number, data: UpdateTimeDto): Promise<times> {
    await this.findOne(id); // Garante que o time existe

    return this.prisma.times.update({
      where: { id_time: id },
      data,
    });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id); // Garante que o time existe

    await this.prisma.times.delete({
      where: { id_time: id },
    });
  }
}
