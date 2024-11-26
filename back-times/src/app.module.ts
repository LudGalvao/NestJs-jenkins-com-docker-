import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimesController } from './modules/times/times.controller';
import { TimesService } from './modules/times/times.service';
import { JogadoresService } from './modules/jogadores/jogadores.service';
import { JogadoresController } from './modules/jogadores/jogadores.controller';
import { PrismaService } from './common/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, TimesController, JogadoresController],
  providers: [AppService, TimesService, JogadoresService, PrismaService],
})
export class AppModule {}
