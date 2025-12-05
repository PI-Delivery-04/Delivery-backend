import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refeicao } from './refeicao/entities/refeicao.entity';
import { RefeicaoModule } from './refeicao/refeicao.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_delivery',
      entities: [Refeicao],
      synchronize: true,
      logging: true,

    }),

    RefeicaoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
