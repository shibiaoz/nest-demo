/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-06-08 18:37:35
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-09 16:08:57
 */
import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        var createNamespace = require('cls-hooked').createNamespace;
        var cls = createNamespace('custrace');
        cls.run(function () {
            let random = Math.random() * 1000;
            console.log('random => ', random)
            cls.set('zybTraceId', random);
           
            var getNamespace = require('cls-hooked').getNamespace;
            var cls2 = getNamespace('custrace');
            let random2 = cls2.get('zybTraceId')
            console.log('2222---------------------'+random2)
        });
        // console.log('日志请求前 11...', req['cus'])
        // req['cus']++
        // console.log('------------')
        next();
        console.log('日志请求后aaaa...', 111);
    }
}
