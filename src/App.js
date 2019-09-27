import React from 'react'

export default class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        this.getPeople()
    }

    getPeople = () => {
        fetch(`http://api.open-notify.org/astros.json`)
        .then(resp => resp.json())
        .then(({people}) => this.setState({ peopleInSpace: people }))
    }

    render(){
        const { peopleInSpace } = this.state
        return <div>
        {peopleInSpace.map(people => <h1>{people.name}</h1>)}
        </div>
    }
}