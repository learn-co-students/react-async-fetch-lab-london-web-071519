import React, { Component } from 'react'
import Astronaught from './Astronaught'

export default class AstronaughtList extends Component {

    render() {
        const { astronaughts } = this.props
        
        return (
            <div>
                {astronaughts.map(astronaught => <Astronaught key={astronaught.name} astronaught={astronaught}/>)}
            </div>
        )
    }
}