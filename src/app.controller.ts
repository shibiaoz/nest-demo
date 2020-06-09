/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-04-15 18:36:52
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-09 15:30:53
 */
import { Controller, Get, Req, Param, Query } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { Logger,PinoLogger } from "nestjs-pino";
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly logger: Logger,
    // private readonly logger: PinoLogger
  ) { }

  @Get()
  getHello(@Req() request: Request, @Query() params): Promise<string> {
    return this.appService.getHello();
  }

  // @Get()
  // getHello(@Req() request: Request, @Query() params): string {
  //   // this.logger.log('getHello()', AppController.name);
  //   this.logger.info({ context: AppController.name }, "getWorld(%o)", process.pid);
  //   setTimeout( () => {
  //     this.logger.info({ context: AppController.name }, "哈哈哈(%o)", process.pid);
  //   }, 400)

  //   this.logger.error('sdfsdfds')

  //   // console.log('controller request => ', JSON.stringify(request.query))
  //   // console.log('controller params => ', JSON.stringify(params))
  //   return this.appService.getHello();
  // }

  @Get('/getBizConfig')
  getBizConfig(): any {
    return this.appService.getBizConfig();
  }
}
