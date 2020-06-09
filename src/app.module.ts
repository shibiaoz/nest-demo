/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-04-15 18:36:52
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-09 14:41:13
 */
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from 'nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { LoggerMiddleware } from './middleware/logger.middleware'
import { CatsModule } from './cats/cats.module';
import { LoggerModule } from "nestjs-pino";
@Module({
  imports: [
    // LoggerModule.forRoot({
    //   // useExisting:true
    // }),
    ConfigModule.forRoot(),
    // CatsModule,
    //   RedisModule.forRootAsync({
    //     useFactory: (configService: ConfigService) => configService.get('redis'),         // or use async method
    //     //useFactory: async (configService: ConfigService) => configService.get('redis'),
    //     inject:[ConfigService]
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private configService: ConfigService) {
    console.log('--getconfig ->',this.configService.get('DATABASE_USER'))
   }
   configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware)
    //   .forRoutes(AppController)
      // .forRoutes({
      //   path: '*',
      //   method: RequestMethod.ALL
      // })
  }
}
