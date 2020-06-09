/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-06-08 19:26:28
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-08 19:43:18
 */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class CatsService {
    constructor(private configService: ConfigService) {
        
    }
    getList() {
        console.log('getList--->', this.configService.get('DATABASE_USER'))
        return [
            {
                name: 'a'
            },
            {
                name: 'b'
            }
        ]
    }
}
