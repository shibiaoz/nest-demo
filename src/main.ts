/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-04-15 18:36:52
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-09 15:42:04
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { clsMiddleware } from './middleware/logtest'
import { reqTestMiddleware } from './middleware/reqtest'
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false
  });
  app.use(clsMiddleware)
  app.use(reqTestMiddleware)
  await app.listen(3000);
}
bootstrap();
