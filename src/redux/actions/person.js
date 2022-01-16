/*
    定义person的action 
 */
import { ADD_PERSON } from '../constan'
// 添加人数的action
export const person = (personObj) => ({type:ADD_PERSON,data:personObj})