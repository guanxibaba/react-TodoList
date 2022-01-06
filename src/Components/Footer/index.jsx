import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    // 全选或全不选的函数
    handleCheckAll = (event) => { 
        this.props.checkAllTodo(event.target.checked)
    }
    // 清除已完成的todo
    heandleClearTodo = () => {
        this.props.clearTodo()
    }
    render() {
        const { todos } = this.props
        // 获取总数
        const todoAll = todos.length
        // 已完成的个数 reduce方法用于计数 第二个参数为初始值 pre是上一次的计算结果 todo是当前的元素
        const doneCount = todos.reduce((pre,todo)=>{return pre + (todo.done ? 1 : 0)},0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === todoAll && todoAll !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todoAll}
                </span>
                <button className="btn btn-danger" onClick={this.heandleClearTodo}>清除已完成任务</button>
            </div>
        )
    }
}
