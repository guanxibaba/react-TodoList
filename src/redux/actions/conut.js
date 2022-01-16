/* 
    定义action对象，包括type需要做什么事情，data 操作的数据
 */
import {INCREMENT,DECREMENT} from '../constan'
// 加法的action
export const incerment = data => ({ type: INCREMENT, data })
// 减法的action
export const decrement = data => ({ type: DECREMENT, data })
// 异步的action
export const asyncIncrement = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incerment(data))
        },time)
    }
}