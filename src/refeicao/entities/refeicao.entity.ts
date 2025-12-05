import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_refeicao"})
export class Refeicao {


    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    categoria: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 6, scale: 2,nullable: false })
    caloria: number;

    @Column({type: 'date'})
    datavalidade: string;







}


/*



  @Column("float")
  calorias: number; 
  // Número de calorias por porção

  @Column()
  expireDate: string; 
  // Data de validade
}


*/