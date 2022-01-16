/*
    定义conut组件的reducer,他是一个纯函数，接收两个参数，第一个参数是之前的状态，第二个参数是action对下给你
 */
import {INCREMENT,DECREMENT} from '../constan'
// 初始化状态
const initState = 0
export default function conut(perState = initState,action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return perState + data
        case DECREMENT:
            return perState - data
        default:
            return perState
    }
}