import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Refeicao } from "../entities/refeicao.entity";
import { Repository } from "typeorm";


@Injectable()
export class RefeicaoService {
    constructor(
        @InjectRepository(Refeicao)
        private refeicaoService: Repository<Refeicao>
    ) { }

    async findAll(): Promise<Refeicao[]> {
        return await this.refeicaoService.find();
    }
}