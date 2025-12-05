import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
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

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Refeicao> {
        return this.refeicaoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Refeicao[]> {
        return this.refeicaoService.findAllByNome(nome);
    }

        @Get(`/categoria/:categoria`)
@HttpCode(HttpStatus.OK)
findAllByCategoria(@Param(`categoria`) categoria: string): Promise<Refeicao[]>{
    return this.refeicaoService.findAllByCategoria(categoria);
}

}