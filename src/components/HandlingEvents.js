import React, { Component } from 'react';

// Using state and binding the this.handleClick method
class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		// This binding is necessary to make 'this' work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'On' : 'Off'}
			</button>
		);
	}
}

// Using public class fields syntax
class ActionButton extends Component {
	handleClick = (e) => {
		console.log('this is:', this, e);
		alert('Check the console.');
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				Click Me
			</button>
		);
	}
}

// Using an arrow function in the callback to bind 'this'
class LoggingButton extends Component {
	handleClick(e) {
		console.log('this is:', this, e);
		alert('Check the console.');
	}

	render() {
		return (
			<button onClick={(e) => this.handleClick(e)}>
				Click Me
			</button>
		);
	}
}

export default class HandlingEvents extends Component {
	render() {

		function handleClick(e) {
			e.preventDefault();
			console.log('The link was clicked');
			alert('The link was clicked');
		}

		return (
			<React.Fragment>
				<a href="/" onClick={handleClick}>
					I prevent the default action
				</a>
				<br/><Toggle />
				<br/><ActionButton />
				<br/><LoggingButton />
				<br/><a href="https://reactjs.org/docs/handling-events.html">Go to React docs</a>
				<br/><a href="/list">Back to List</a>
			</React.Fragment>
		);
	}
}
