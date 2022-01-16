/*
    用于定义conut中的action对象
 */
import {INCREMENT,DECREMENT} from '../constan'
export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT,data})
export const incrementAsync = (data,time) => {
    return (disptach) => {
        setTimeout(() => {
            disptach(increment(data))
        },time)
    }
}