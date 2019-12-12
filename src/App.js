import React, { Component } from 'react'
import AstronaughtList from './Astronaught_List'

const URL = 'http://api.open-notify.org/astros.json'

export default class App extends Component {

    state = {
        astronaughts: []
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(astronaughts => {
                this.setState({ astronaughts: astronaughts.people })
            })
            .catch(error => alert(error.message))
    }

    render() {
        console.log(this.state.astronaughts)
        return (
            <div>
                {<AstronaughtList astronaughts={this.state.astronaughts} />}
            </div>
        )
    }
}