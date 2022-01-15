/*
    此文件专门创建和暴露一个store，整个文件只有一个store对象
 */

// 引入redux并创建一个store
import { createStore } from 'redux'
// 引入专门处理conut的reduxcers
import conutReducer from './conut_reduxcers'
// 暴露store
export default createStore(conutReducer);