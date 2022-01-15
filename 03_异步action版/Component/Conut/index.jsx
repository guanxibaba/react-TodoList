import React, { Component } from 'react'
import store from '../../redux/store'
import {createActionIncrement,createActiondecrement,createActionAsyncIncrement} from '../../redux/conut_action'

export default class Conut extends Component {
    state = { car: '玛莎拉蒂总裁' }
    // 当页面挂载时，就检测reducer有没有更改状态
    // componentDidMount() {
    //     // subscribe订阅消息 当reducer更改状态时，就会收到消息，然后更改状态
    //     store.subscribe(() => {
    //         this.setState({})
    //         // console.log('@');
    //     })
    // }
    // 加法
    increment = () =>{
        const { value } = this.selectNumber
        // 通知reducer更改状态并把action动作对象传给他
        store.dispatch(createActionIncrement(value * 1))
    }
    // 减法
    decrement = () =>{
        const { value } = this.selectNumber
        store.dispatch(createActiondecrement(value * 1))
    }
    // 奇数加
    incrementIfOdd = () =>{
        const { value } = this.selectNumber
        // getState获取当前的状态值
        const conut = store.getState(); // 这里返回的是一个结果
        if (conut % 2 !== 0) {
            store.dispatch(createActionIncrement(value * 1))
        }
    }
    // 异步加
    incrementAsync = () =>{
        // setTimeout(() => {
            const { value } = this.selectNumber
            store.dispatch(createActionAsyncIncrement(value * 1,500))
        // },1000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                &nbsp;
                <select ref={c => { this.selectNumber = c }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前值为奇数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
