import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Refeicao } from "../entities/refeicao.entity";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";


@Injectable()
export class RefeicaoService {
    constructor(
        @InjectRepository(Refeicao)
        private refeicaoRepository: Repository<Refeicao>
    ) { }

    async findAll(): Promise<Refeicao[]> {
        return await this.refeicaoRepository.find();
    }

    async findById(id: number): Promise<Refeicao> {

        const refeicao = await this.refeicaoRepository.findOne({
            where: {
                id
            }
        });

        if (!refeicao)
            throw new HttpException('Refeição não encontrada!', HttpStatus.NOT_FOUND);
        return refeicao;
    }

    async findAllByCategoria(categoria: string): Promise<Refeicao[]> {
        return await this.refeicaoRepository.find({
            where: {
                categoria: ILike(`%${categoria}%`)
            }
        });

    }

    async create(refeicao: Refeicao): Promise<Refeicao> {
        return await this.refeicaoRepository.save(refeicao)
    }

    async update(refeicao: Refeicao): Promise<Refeicao> {
        await this.findById(refeicao.id)
        return await this.refeicaoRepository.save(refeicao)
    };

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id)
        return await this.refeicaoRepository.delete(id)
    }

    async findAllByNome(nome: string): Promise<Refeicao[]> {
        return await this.refeicaoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            }
        })
    }


}