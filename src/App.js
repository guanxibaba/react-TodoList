import React, { Component } from 'react'
import Header from './Components/Header'
import List from './Components/List'
import Footer from './Components/Footer'
import './App.css'
export default class App extends Component {
    // 数据在哪里，操作数据的方法就在那里

    // 初始化状态
    state = {
        todos: [
            {id:'001',name: '吃饭',done: true },
            {id:'002',name: '打代码',done: false},
            {id:'003',name: '睡觉',done: false}
        ]
    }
    // 添加todo 接收Header的参数
    addTodo = (todosObj) => {
        // 解构赋值
        const { todos } = this.state
        // 创建一个新的数据，并把最新的数据放在前面
        const newTodos = [todosObj, ...todos]
        // 更改状态
        this.setState({todos:newTodos})
    }
    // 修改状态 更新里面复选框的值
    upDateTodo = (id,done) => {
        // 获取状态
        const { todos } = this.state
        // 处理数据
        const newTodos = todos.map((todosObj) => {
            if (todosObj.id == id) {
                return {...todosObj,done}
            } else {
                return todosObj
            }
        })
        // 更新状态
        this.setState({todos:newTodos})
    }
    // 删除一个todo
    deleteTodo = (id) => {
        // 获取状态
        const { todos } = this.state;
        // 处理数据
        const newTodo = todos.filter((todo) => {
            return todo.id !== id
        })
        // 更新状态
        this.setState({todos:newTodo})
    }
    // 全选或全不选的函数
    checkAllTodo = (done) => {
        // 获取状态
        const { todos } = this.state
        // 处理数据
        const newTodos = todos.map((todoObj) => {
            return {...todoObj,done} // 把原来的数据的每一个done都修改为传过来的done
        })
        // 更新状态
        this.setState({todos:newTodos})
    }
    // 清除全部选中的todo
    clearTodo = () => {
        // 获取状态
        const { todos } = this.state
        // 修改数据
        const newTodos = todos.filter((todoObj) => !todoObj.done)
        // 更新数据
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} upDateTodo={this.upDateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearTodo={this.clearTodo}/>
                </div>
          </div>
        )
    }
}