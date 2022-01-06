import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    // 初始化状态
    state = {mouse: false}
    // 处理鼠标移入移出的函数，因为事件触发时，调用了这个函数并传了一个参数 所以返回值必须是一个函数
    handleMouse = (flag) => {
        return () => {
            // 解构赋值
            const { mouse } = this.state
            // 更新状态
            this.setState({mouse:flag})
        }
    }

    // 勾选，取消一个todo的函数
    handleCheck = (id) => {
        return (event) => {
            this.props.upDateTodo(id,event.target.checked)
        }
    }
    // 删除一个todo的函数
    handleDelete = (id) => {
        // confirm提示框 有确定和取消两个按钮 确定返回true 反之false
        if (window.confirm('确定删除该选项吗？')) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done } = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'rgba(250,250,250,.3)'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false) }>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={() => {this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}
