import React, { Component } from 'react';

export default class NumberScrollerInput extends Component {

	state = {
		input: 0,
	};

	handleChange = (e) => {
		this.setState({
			input: e.target.value
		})
	}

	render() {
		return (
			<div className="NumberScrollerInput">
				<h1>{this.state.input}</h1>
				<input type="range" min="0" max="10" step="1" name="input" value={this.state.input} onChange={this.handleChange} />
			</div>
		);
	}
}
