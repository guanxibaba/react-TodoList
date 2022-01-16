import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incerment,decrement,asyncIncrement} from '../../redux/actions/conut'

class Conut extends Component {
    //加法
    add = () => {
        const { value } = this.number
        this.props.incerment(value *1)
    }
    // 减法
    reduce = () => {
        const { value } = this.number
        this.props.decrement(value *1)
    }
    // 奇数加
    oddNumber = () => {
        const { value } = this.number
        if (this.props.conut % 2 !== 0) {
            this.props.incerment(value *1)
        }
    }
    // 异步加
    asyncAdd = () => {
        const { value } = this.number
        this.props.asyncIncrement(value *1,1000)
    }
    render() {
        return (
            <div>
                <h2>Conut组件,下方组件的人数为：{this.props.number}</h2>
                <h4>当前求和为：{this.props.conut}</h4>
                <select ref={c => this.number = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>&nbsp;
                <button onClick={this.add}>+</button>&nbsp;
                <button onClick={this.reduce}>-</button>&nbsp;
                <button onClick={this.oddNumber}>奇数加</button>&nbsp;
                <button onClick={this.asyncAdd}>异步加</button>
            </div>
        )
    }
}
// 定义容器组件
export default connect(state => ({ conut: state.conut, number: state.person.length }), {incerment,decrement,asyncIncrement})(Conut)