import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { EncomendaService } from "../services/encomenda.service";
import { Encomenda } from "../entities/encomenda.entity";


@Controller("/encomenda")
export class EncomendaController {
    constructor(private readonly encomendaService: EncomendaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Encomenda[]> {
        return this.encomendaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Encomenda> {
        return this.encomendaService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Encomenda[]> {
        return this.encomendaService.findAllByNome(nome);
    }

    @Get(`/categoria/:categoria`)
    @HttpCode(HttpStatus.OK)
    findAllByCategoria(@Param(`categoria`) categoria: string): Promise<Encomenda[]> {
        return this.encomendaService.findAllByCategoria(categoria);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() encomenda: Encomenda): Promise<Encomenda> {
        return this.encomendaService.create(encomenda);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() encomenda: Encomenda): Promise<Encomenda> {
        return this.encomendaService.update(encomenda)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.encomendaService.delete(id)
    }
}