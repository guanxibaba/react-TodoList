/*
    此文件专门创建和暴露一个store，整个文件只有一个store对象
 */

// 引入redux并创建一个store
import { createStore,applyMiddleware,combineReducers } from 'redux'
// 引入专门处理conut的reducer
import conutReducer from './reducers/count'
// 引入专门处理person的reducer
import personReducer from './reducers/person';
// 用于支持异步的action
import thunk from 'redux-thunk';
// 把所有的reducer都存在同一个里面,必须存为一个对象，方便读取数据
const allReducer = combineReducers({
    total: conutReducer,
    persons:personReducer
})
// 暴露store
export default createStore(allReducer,applyMiddleware(thunk));