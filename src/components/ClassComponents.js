import React, { Component } from 'react';
import ListLink from './ListLink';

function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends Component {
	// Adding local state to the Class
	// Add a Class Constructor that assigns the initial state
	// Class components should always call the base constructor with props
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	
	// Lifecycle Methods
	// We want to set up the timer whenever the Clock component is rendered for the first time
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	// We want to clear the timer whenever the DOM produced by the Clock is removed
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	// Implement a method called tick() that the Clock component runs each second
	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<FormattedDate date={this.state.date} />
			</div>
		);
	}
}

export default class ClassComponents extends Component {
	render() {
		return (
			<React.Fragment>
				<Clock />
				<a href="https://reactjs.org/docs/state-and-lifecycle.html">Got to React docs</a>
				<ListLink />
			</React.Fragment>
		);
	}
}
