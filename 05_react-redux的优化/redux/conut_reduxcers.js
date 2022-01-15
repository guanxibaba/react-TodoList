/* 
    1.该文件是用于创建一个专门为conut组件服务的reducer，reducer本身就是一个函数
    2.reducer接收两个参数，preState为之前的状态 action为动作对象
*/
import {INCREMENT,DECREMENT} from './constan'
const initState = 0; // 初始化状态
export default function conutReducer(preState = initState, action) {
    // console.log(preState, action);
    // 解构赋值 接收的action是一个对象 type为类型 data为数据  你想要做什么操作放在type里面 操作的数据放在data里面
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}