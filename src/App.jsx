import React, { Component } from 'react'
import Conut from './container/Conut'
import Person from './container/Person'

export default class App extends Component {
    render() {
        return (
            <div>
                <Conut />
                <hr />
                <Person />
            </div>
        )
    }
}
