/*
    创建一个添加人的reducer
 */
import { ADD_PERSON } from "../constan";
// 初始化状态
const initState = [{id:'001', name: 'tom', age: 18 }]
export default function personReducer(perObj = initState, action) {
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            return [data,...perObj]
    
        default:
            return perObj
    }
}