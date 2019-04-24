import React, { Component } from 'react';

function Welcome(props) {
	return (
		<React.Fragment>
			<h1>Hello, {props.name}!</h1>
			<p>This is a function component.</p>
		</React.Fragment>
	);
}

function Welcomes() {
	return (
		<React.Fragment>
			<p>You can nest function components.</p>
			<Welcome name="Stan" />
			<Welcome name="Kyle" />
			<Welcome name="Cartman" />
			<Welcome name="Kenny" />
		</React.Fragment>
	);
}

export default class FunctionComponents extends Component {
	render() {
		return (
			<React.Fragment>
				<Welcome name="Tim" />
				<Welcomes />
				<a href="https://reactjs.org/docs/components-and-props.html">Go to React docs</a>
				<br/><a href="/list">Back to List</a>
			</React.Fragment>
		);
	}
}
