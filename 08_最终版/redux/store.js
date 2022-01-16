/*
    此文件专门创建和暴露一个store，整个文件只有一个store对象
 */
// 引入汇总之后的reducer
import reducer from './reducers'
// 引入redux并创建一个store
import { createStore,applyMiddleware } from 'redux'

// 用于支持异步的action
import thunk from 'redux-thunk';
// redux引入开发者工具库
import {composeWithDevTools} from 'redux-devtools-extension'

// 暴露store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));