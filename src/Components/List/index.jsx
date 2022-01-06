import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    // 限制接收的类型
    static propTypes = {
        todos: PropTypes.array.isRequired,
        upDateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render() {
        const {todos,upDateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
            {
                todos.map(todo => {
                    return <Item key={todo.id} {...todo} upDateTodo={upDateTodo} deleteTodo={deleteTodo}/>
                })
            }
            </ul>
        )
    }
}
