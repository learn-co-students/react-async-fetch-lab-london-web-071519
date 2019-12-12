import React, { Component } from 'react'

export default class Astronaught extends Component {

    render() {
        // const {name, craft} = this.props.astronaught
        console.log(this.props.astronaught)
        return (
            <div style={{border: '1px', margin: '5px'}}>
                <p>{this.props.astronaught.name}</p>
                <p>{this.props.astronaught.craft}</p>
            </div>
        )
    }
}