import { PrismaService } from 'src/common/prisma/prisma.service';
import { jogadores } from '@prisma/client';
import { CreateJogadorDto } from './dtos/create-jogador.dto';
import { UpdateJogadorDto } from './dtos/update-jogador.dto';
export declare class JogadoresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateJogadorDto): Promise<jogadores>;
    findAll(): Promise<jogadores[]>;
    findOne(id: number): Promise<jogadores>;
    update(id: number, data: UpdateJogadorDto): Promise<jogadores>;
    remove(id: number): Promise<void>;
}
