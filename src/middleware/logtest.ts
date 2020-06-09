/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-06-09 14:42:56
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-09 16:05:16
 */ 
const cls = require('cls-hooked')
const uuidv4 = require('uuid/v4')

export const clsNamespace2 = cls.createNamespace('app')
export const clsNamespace = cls.getNamespace('app')
// export var clsNamespace2 = 0

export const clsMiddleware = (req, res, next) => {
  // req and res are event emitters. We want to access CLS context inside of their event callbacks
  clsNamespace2.bind(req)
  clsNamespace2.bind(res)

  const traceID = uuidv4()
//   clsNamespace2 = traceID
  clsNamespace2.run(() => {
    clsNamespace2.set('traceID', traceID)
    req.testid = traceID
    clsNamespace2.set('cusReq',req)
    next()
  })
}