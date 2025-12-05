import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { Refeicao } from "./entities/refeicao.entity";



@Module({
    imports: [TypeOrmModule.forFeature([Refeicao])],
    providers: [],
    controllers: [],
    exports: [],
})

export class RefeicaoModule{}