import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/clients.entity';
import { Contact } from './contact/contact.entity';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'ben',
      password: '123456',
      database: 'full-stack',
      entities: [
          __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      logging: true,
  }),
  TypeOrmModule.forFeature([Client, Contact]),
  ],
  controllers: [
    AppController,
    ClientsController,
    ContactController,
    ],

  providers: [
    AppService,
    ClientsService,
    ContactService,
    ],
})
export class AppModule {}
