/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-06-09 14:42:56
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-09 15:53:40
 */ 
// const cls = require('cls-hooked')
// const uuidv4 = require('uuid/v4')

// export const clsNamespace = cls.createNamespace('app')
// export var clsNamespace = 0

export const reqTestMiddleware = (req, res, next) => {
  // req and res are event emitters. We want to access CLS context inside of their event callbacks
    req.testid = ('a => '+req.testid)  || '-----)'
    next()
}