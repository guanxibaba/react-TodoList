import React, { Component } from 'react'

export default class Conut extends Component {
    state = { conut: 0 }
    // 加法
    increment = () =>{
        const { value } = this.selectNumber
        const {conut} = this.state
        this.setState({conut:conut + value * 1})
    }
    // 减法
    decrement = () =>{
        const { value } = this.selectNumber
        const {conut} = this.state
        this.setState({conut:conut - value * 1})
    }
    // 奇数加
    incrementIfOdd = () =>{
        const { value } = this.selectNumber
        const { conut } = this.state
        if (conut % 2 !== 0) {
            this.setState({conut:conut + value * 1})
        }
    }
    // 异步加
    incrementAsync = () =>{
        setTimeout(() => {
            const { value } = this.selectNumber
            const {conut} = this.state
            this.setState({conut:conut + value * 1})
        },1000)
    }
    render() {
        const {conut} = this.state
        return (
            <div>
                <h1>当前求和为：{conut}</h1>
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
