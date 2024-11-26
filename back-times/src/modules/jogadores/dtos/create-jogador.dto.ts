import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateJogadorDto {
  @IsString()
  nome_jogador: string;

  @IsString()
  posicao: string;

  @IsInt()
  @IsOptional()
  id_time?: number;
}
