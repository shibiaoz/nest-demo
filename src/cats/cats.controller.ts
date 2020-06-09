/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-06-08 19:24:53
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-08 19:31:24
 */ 
import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {

    }
    @Get('/list')
    list() {
        return this.catsService.getList()
    }
}
