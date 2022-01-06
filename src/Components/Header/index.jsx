import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    // 限制传给App的类型为函数
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    // 获取输入内容并把内容给App onKeyUp键盘弹起事件
    handleKeyUp = (event) => {
        // 解构赋值 把event里面的target和keyCode取出来
        const { target, keyCode } = event
        // 判断按下的是否是回车键(因为键盘弹起事件一直会触发)
        if (keyCode !== 13) return 
        // 判断输入内容是否为空
        if (target.value.trim() === '') {
            alert('输入内容不能为空哦！')
            return
        }
        // 把内容以对象的形式作为参数发送给App组件 使用nanoid生成不重复的字符串
        this.props.addTodo({ id: nanoid(), name: target.value, done: false })
        // 清空输入框
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
