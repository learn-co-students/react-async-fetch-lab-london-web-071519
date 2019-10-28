import React, {Component} from 'react';

class App extends Component {
	state = {astros: []};
	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
			.then((resp) => resp.json())
			.then((resp) => this.setState({astros: resp.people}));
	}
	renderAstros = () => {
		return this.state.astros.map((person, id) => (
			<p key={id}>
				{person.name} - {person.craft}
			</p>
		));
	};
	render() {
		return <div>{this.renderAstros()}</div>;
	}
}

export default App;
