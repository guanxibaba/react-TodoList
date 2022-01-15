// 组件容器
// 引入UI组件
import conutUI from '../../Component/Conut'
// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
import {createActionIncrement,
    createActiondecrement,
    createActionAsyncIncrement} from '../../redux/conut_action'

function mapStateToProps(state) {
    return {conut:state}
}
function mapDispatchToProps(dispatch) {
    return {
        jia: (data) => {
            dispatch(createActionIncrement(data))
        },
        jian: (data) => {
            dispatch(createActiondecrement(data))
        },
        jiaAsync: (data,time) => {
            dispatch(createActionAsyncIncrement(data,time))
        }
    }
}

// 使用connect()()创建并暴露一个Conut的组件容器
export default connect(mapStateToProps,mapDispatchToProps)(conutUI);