import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { Refeicao } from "./entities/refeicao.entity";
import { RefeicaoService } from "./services/refeicao.service";
import { RefeicaoController } from "./controller/refeicao.controller";



@Module({
    imports: [TypeOrmModule.forFeature([Refeicao])],
    providers: [RefeicaoService],
    controllers: [RefeicaoController],
    exports: [],
})

export class RefeicaoModule{}