/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-06-08 20:01:40
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-08 20:05:08
 */ 

import { LoggerService, Logger } from '@nestjs/common';
export class MyLogger extends Logger {
    error(message: string, trace: string) {
        // add your tailored logic here
        super.error(message, trace);
      }
}
// export class MyLogger implements LoggerService {
//     log(message: any, context?: string) {
//         throw new Error("Method not implemented.");
//     }
//     error(message: any, trace?: string, context?: string) {
//         throw new Error("Method not implemented.");
//     }
//     warn(message: any, context?: string) {
//         throw new Error("Method not implemented.");
//     }
//     debug?(message: any, context?: string) {
//         throw new Error("Method not implemented.");
//     }
//     verbose?(message: any, context?: string) {
//         throw new Error("Method not implemented.");
//     }
// }