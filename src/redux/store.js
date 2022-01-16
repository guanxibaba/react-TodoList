/*
    用于定义一个sore
 */
// 引入createStore创建一个store并暴露出去
import { createStore, applyMiddleware } from "redux";
// 引入开发者工具
import { composeWithDevTools } from "redux-devtools-extension";
// 引入支持异步的第三方库
import thunk from "redux-thunk";
// 引入一个总的reducer
import reducers from './reducers'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
