/* 
    此文件用于汇总所有的组件的reducer文件
 */

// 引入专门处理conut的reducer
import conut from './count'
// 引入专门处理person的reducer
import person from './person';
import { combineReducers } from 'redux'

// 把所有的reducer都存在同一个里面,必须存为一个对象，方便读取数据
export default combineReducers({conut,person})