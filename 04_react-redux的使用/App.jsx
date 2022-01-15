import React, { Component } from 'react'
import Conut from './container/Conut'
import store from './redux/store'

export default class App extends Component {
    render() {
        return (
            <div>
                <Conut store={store}/>
            </div>
        )
    }
}
