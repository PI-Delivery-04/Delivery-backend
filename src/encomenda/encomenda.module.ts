import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { Encomenda } from "./entities/encomenda.entity";
import { EncomendaService } from "./services/encomenda.service";
import { EncomendaController } from "./controller/encomenda.controller";



@Module({
    imports: [TypeOrmModule.forFeature([Encomenda])],
    providers: [EncomendaService],
    controllers: [EncomendaController],
    exports: [],
})

export class EncomendaModule { }