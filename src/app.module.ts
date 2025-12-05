import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encomenda } from './encomenda/entities/encomenda.entity';
import { EncomendaModule } from './encomenda/encomenda.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'r$4abWKj#456',
      database: 'db_delivery',
      entities: [Encomenda],
      synchronize: true,
      logging: true,
    }),

    EncomendaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
