import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />, document.getElementById('root'));
// 重新渲染页面，虽然是重新渲染整个页面 但是因为react中有diffing，所以不会影响效率
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
})