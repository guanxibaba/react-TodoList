import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)  // 准备好一个action对象 react-redux会自动叫reducer更新状态
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h2>Person组件,上方组件的和为{this.props.number}</h2>
                <input ref={c => {this.nameNode =c}} type="text" placeholder="请输入名字"/>&nbsp;
                <input ref={c => {this.ageNode =c}} type="text" placeholder="请输入年龄" />&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((personObj) => {
                            return <li key={personObj.id}>姓名：{personObj.name}————年龄：{personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({ persons: state.person,number:state.conut }), // 映射状态
    {addPerson} //映射操作状态的方法 value是action对象
)(Person)