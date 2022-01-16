/* 
    定义person中的action对象
 */
import { ADD_PERSON } from "../constan";
export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})