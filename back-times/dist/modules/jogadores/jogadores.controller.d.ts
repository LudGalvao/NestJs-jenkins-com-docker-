import { JogadoresService } from './jogadores.service';
import { CreateJogadorDto } from './dtos/create-jogador.dto';
import { UpdateJogadorDto } from './dtos/update-jogador.dto';
export declare class JogadoresController {
    private readonly jogadoresService;
    constructor(jogadoresService: JogadoresService);
    create(createJogadorDto: CreateJogadorDto): Promise<{
        id_jogador: number;
        nome_jogador: string;
        posicao: string;
        id_time: number | null;
    }>;
    findAll(): Promise<{
        id_jogador: number;
        nome_jogador: string;
        posicao: string;
        id_time: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id_jogador: number;
        nome_jogador: string;
        posicao: string;
        id_time: number | null;
    }>;
    update(id: number, updateJogadorDto: UpdateJogadorDto): Promise<{
        id_jogador: number;
        nome_jogador: string;
        posicao: string;
        id_time: number | null;
    }>;
    remove(id: number): Promise<void>;
}
