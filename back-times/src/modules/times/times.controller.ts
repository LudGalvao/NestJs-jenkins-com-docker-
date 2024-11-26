import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TimesService } from './times.service';
import { CreateTimeDto } from './dtos/create-time.dto';
import { UpdateTimeDto } from './dtos/update-time.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('times')
@Controller('times')
export class TimesController {
  constructor(private readonly timesService: TimesService) {}

  @Post()
  async create(@Body() createTimeDto: CreateTimeDto) {
    return this.timesService.create(createTimeDto);
  }

  @Get()
  async findAll() {
    return this.timesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.timesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTimeDto: UpdateTimeDto) {
    return this.timesService.update(+id, updateTimeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.timesService.remove(+id);
  }
}
