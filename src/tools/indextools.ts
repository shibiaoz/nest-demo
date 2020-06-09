/*
 * @Description: 头部注释
 * @Author: zhangshibiao
 * @Date: 2020-06-09 14:46:43
 * @LastEditors: zhangshibiao
 * @LastEditTime: 2020-06-09 15:18:59
 */
import { clsNamespace } from '../middleware/logtest'
export const test = () => {
    let arr = [0,100,10000,90000,9999999,99999999,999999999,999999999,9999999999]
    let random = Math.random() * (arr.length)
    let radomNum: any = Math.floor(parseInt(random + ''))
    console.log(arr[radomNum])
    for (let i = 0; i < arr[radomNum]; i++) {
        // console.log(i)
    }
    
    // console.log('traceID2 => ',clsNamespace.get('traceID'))
    console.log('traceID2', clsNamespace)
}
