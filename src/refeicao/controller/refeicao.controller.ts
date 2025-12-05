import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { RefeicaoService } from "../services/refeicao.service";
import { Refeicao } from "../entities/refeicao.entity";


@Controller("/refeicao")
export class RefeicaoController {
    constructor(private readonly refeicaoService: RefeicaoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Refeicao[]> {
        return this.refeicaoService.findAll();
    }
}