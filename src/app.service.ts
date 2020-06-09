/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-04-15 18:36:52
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-09 16:12:48
 */
import { Injectable, Scope, Inject, Req } from '@nestjs/common';
import { CONTEXT, RequestContext } from '@nestjs/microservices';
import { clsNamespace } from './middleware/logtest'
import { test as indexTool } from './tools/indextools'
// import { Logger,PinoLogger } from "nestjs-pino";
let arr = [100, 500, 1000, 1500, 2000, 3000, 4000]

const modifyReq = () => {
  let req = clsNamespace.get('cusReq')
  req.testid = 'b:' + req.testid
  clsNamespace.set('cusReq',req)
}

const resPromise = ():Promise<string> => {
  let random = Math.random() * (arr.length)
  let radomNum: any = Math.floor(parseInt(random + ''))
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('traceID2', clsNamespace.get('traceID'))
      modifyReq()
      console.log('testid',  clsNamespace.get('cusReq').testid +'\r\n')
      resolve('-----')
    }, arr[radomNum])
  })
}
@Injectable({
  // scope: Scope.REQUEST,
  // providers:[Request]
})
export class AppService {
  constructor() {

  }
  async getHello(): Promise<string> {
    // console.log('--',request.params)

    console.log('traceID1', clsNamespace.get('traceID'))
    // indexTool()
    // console.log('traceID3',clsNamespace)
    

    // console.log('traceID1',clsNamespace.get('traceID'))
    // indexTool()
    // console.log('traceID3',clsNamespace.get('traceID'))
    // var getNamespace = require('cls-hooked').getNamespace;
    // var cls = getNamespace('custrace');
    // let random = cls.get('zybTraceId')
    // this.logger.info({ context: AppService.name }, "测试(%o)", process.pid);
    return resPromise();
  }

  getBizConfig(): any {
    return {
      grade: [1, 2, 3]
    }
  }
}
