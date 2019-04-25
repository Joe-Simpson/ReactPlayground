import React, { Component } from 'react';
import ListLink from './ListLink';

function Welcome(props) {
	return (
		<React.Fragment>
			<h3>Hello, {props.name}!</h3>
			<p>This is a function component.</p>
		</React.Fragment>
	);
}

function Welcomes() {
	return (
		<React.Fragment>
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
				<h1>Function Components</h1>
				<p>Function components can take the form of:</p>
				<pre className="prettyprint lang-js">
					const Example = (props) => {"{"} <br/>
					&nbsp;&nbsp;return &lt;div /&gt;; <br/>
					{"}"}
				</pre> <br/>
				<p>or</p>
				<pre className="prettyprint lang-js">
					function Example(props) {"{"} <br/>
					&nbsp;&nbsp;return &lt;div /&gt;; <br/>
					{"}"}
				</pre> <br/>
				<p>These were previously known as <strong>stateless components</strong>. However since the implementation of <strong>Hooks</strong> in 16.8.0, we have the ability to use React state from these. We now prefer the name <strong>function components</strong>.</p>
				<p>Function components can be singular/1 dimensional.</p>
				<Welcome name="Tim" />
				<h2>Nested function components</h2>
				<p>You can also nest function components.</p>
				<Welcomes />
				<a href="https://reactjs.org/docs/components-and-props.html">Go to React docs</a>
				<ListLink />
			</React.Fragment>
		);
	}
}
