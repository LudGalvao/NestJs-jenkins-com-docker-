import { IsString } from 'class-validator';

export class CreateTimeDto {
  @IsString()
  nome_time: string;
}
