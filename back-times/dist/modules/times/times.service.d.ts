import { PrismaService } from 'src/common/prisma/prisma.service';
import { times } from '@prisma/client';
import { CreateTimeDto } from './dtos/create-time.dto';
import { UpdateTimeDto } from './dtos/update-time.dto';
export declare class TimesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTimeDto): Promise<times>;
    findAll(): Promise<times[]>;
    findOne(id: number): Promise<times>;
    update(id: number, data: UpdateTimeDto): Promise<times>;
    remove(id: number): Promise<void>;
}
