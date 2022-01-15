import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    //使用Provider组件 并把store交给它，可以准确的判断那个组件需要使用到store，就会把store给他
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

