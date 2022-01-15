// 组件容器

// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
import {createActionIncrement,
    createActiondecrement,
    createActionAsyncIncrement
} from '../../redux/actions/count'
    
import React, { Component } from 'react'


 class Conut extends Component {
    state = { car: '玛莎拉蒂总裁' }
  
    // 加法
    increment = () =>{
        const { value } = this.selectNumber;
        this.props.jia(value * 1)

    }
    // 减法
    decrement = () =>{
        const { value } = this.selectNumber;
        this.props.jian(value * 1)

    }
    // 奇数加
    incrementIfOdd = () =>{
        const { value } = this.selectNumber
        if (this.props.conut % 2 !== 0) {
            this.props.jia(value * 1)
        }
        
    }
    // 异步加
    incrementAsync = () =>{
        // setTimeout(() => {
        const { value } = this.selectNumber
        this.props.jiaAsync(value * 1,500)
        // },1000)
    }
    render() {
        // console.log(this.props);
        return (
            
            <div>
                <h2>Count组件,下方人数的总和为：{this.props.personLength}</h2>
                <h4>当前求和为：{this.props.conut}</h4>
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


// 使用connect()()创建并暴露一个Conut的组件容器
// 使用react-redux库 当他发现我们已经准备好了一个action对象，会自动触发store然后把这个action对象交给他并让reducer处理和返回
// 所以省略了dispatch
export default connect(state =>({ conut: state.total, personLength:state.persons.length}) , {
    jia: createActionIncrement,
    jian: createActiondecrement,
    jiaAsync:createActionAsyncIncrement
})(Conut);