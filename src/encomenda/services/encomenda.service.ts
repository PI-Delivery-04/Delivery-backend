import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Encomenda } from "../entities/encomenda.entity";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";


@Injectable()
export class EncomendaService {
    constructor(
        @InjectRepository(Encomenda)
        private encomendaRepository: Repository<Encomenda>
    ) { }

    async findAll(): Promise<Encomenda[]> {
        return await this.encomendaRepository.find();
    }

    async findById(id: number): Promise<Encomenda> {

        const encomenda = await this.encomendaRepository.findOne({
            where: {
                id
            }
        });

        if (!encomenda)
            throw new HttpException('Encomenda não encontrada!', HttpStatus.NOT_FOUND);
        return encomenda;
    }

    async findAllByCategoria(categoria: string): Promise<Encomenda[]> {
        return await this.encomendaRepository.find({
            where: {
                categoria: ILike(`%${categoria}%`)
            }
        });

    }

    async create(encomenda: Encomenda): Promise<Encomenda> {
        return await this.encomendaRepository.save(encomenda)
    }

    async update(encomenda: Encomenda): Promise<Encomenda> {
        await this.findById(encomenda.id)
        return await this.encomendaRepository.save(encomenda)
    };

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id)
        return await this.encomendaRepository.delete(id)
    }

    async findAllByNome(nome: string): Promise<Encomenda[]> {
        return await this.encomendaRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            }
        })
    }


}