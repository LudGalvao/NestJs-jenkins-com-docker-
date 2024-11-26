import { TimesService } from './times.service';
import { CreateTimeDto } from './dtos/create-time.dto';
import { UpdateTimeDto } from './dtos/update-time.dto';
export declare class TimesController {
    private readonly timesService;
    constructor(timesService: TimesService);
    create(createTimeDto: CreateTimeDto): Promise<{
        nome_time: string;
        id_time: number;
    }>;
    findAll(): Promise<{
        nome_time: string;
        id_time: number;
    }[]>;
    findOne(id: string): Promise<{
        nome_time: string;
        id_time: number;
    }>;
    update(id: string, updateTimeDto: UpdateTimeDto): Promise<{
        nome_time: string;
        id_time: number;
    }>;
    remove(id: string): Promise<void>;
}
