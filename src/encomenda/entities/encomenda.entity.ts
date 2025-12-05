import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "tb_encomenda" })
export class Encomenda {


    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    categoria: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
    preco: number;

    @Column({ type: 'date' })
    datavalidade: string;







}