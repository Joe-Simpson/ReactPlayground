import React, { Component } from 'react';

const element = (
	<div>
		<h1>Hello, world!</h1>
		<p>This is rendered from a static element.</p>
		<a href="https://reactjs.org/docs/rendering-elements.html">Go to React docs</a>
		<br/><a href="/list">Back to list</a>
	</div>
);

export default class RenderingElements extends Component {
	render() {
		return (
			<React.Fragment>
				{element}
			</React.Fragment>
		);
	}
}
