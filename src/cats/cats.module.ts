/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-06-08 19:18:42
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-08 19:42:45
 */ 
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports:[
    ConfigModule.forRoot()
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
