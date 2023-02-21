import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
//import { User } from './users/entities/user.entity' // removed because of autoload
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({
      //ignoreEnvFile: false,
      //envFilePath: ['.config.env'],
    }),    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      //entities: [User], 
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,    
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})

export class AppModule {
  constructor(private dataSource: DataSource) {}   
}
//console.log(process.env.DB_HOST); 
//console.log(process.env.YARN_VERSION);