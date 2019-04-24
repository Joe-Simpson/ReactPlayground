import React, { Component } from 'react';

// text input
class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		alert('A name was submitted: ' + this.state.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="name">
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

// Forcing formatting
class UppercaseNameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value.toUpperCase()});
	}

	handleSubmit(event) {
		event.preventDefault();
		alert('A name was submitted: ' + this.state.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="name">
					Name (forced uppercase):
					<input type="text" value={this.state.value} onChange={this.handleChange} name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

// Textarea
class EssayForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Please write an essay about your favorite DOM element.'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		alert('An essay was submitted: ' + this.state.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="essay">
					Essay:
					<textarea
						name="essay" 
						value={this.state.value} 
						onChange={this.handleChange} 
						cols="30" 
						rows="10"
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

// Dropdown selector
class FlavorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {value: 'coconut'};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		alert('Your favorite flavor is: ' + this.state.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="flavor">
					Pick your favorite flavor:
					<select 
						name="flavor"
						value={this.state.value}
						onChange={this.handleChange}
					>
						<option value="grapefruit">Grapefruit</option>
						<option value="lemon">Lemon</option>
						<option value="chocolate">Chocolate</option>
						<option value="honey">Honey</option>
						<option value="caramel">Caramel</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

// Multiple Inputs
class Reservation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
			numberOfGuests: 2,
			name: 'Jon'
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<form>
				<label htmlFor="isGoing">
					Is going:
					<input
						name="isGoing" 
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange}
					/>
				</label>
				<br/>
				<label htmlFor="numberOfGuests">
					Number of guests:
					<input
						name="numberOfGuests" 
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange}
					/>
				</label>
				<br/>
				<label htmlFor="name">
					Name:
					<input
						name="name" 
						type="text"
						value={this.state.name}
						onChange={this.handleInputChange}
					/>
				</label>
				<br/>
			</form>
		)
	}
}

export default class Forms extends Component {
	render() {
		return (
			<React.Fragment>
				<NameForm />
				<hr/>
				<UppercaseNameForm />
				<hr/>
				<EssayForm />
				<hr/>
				<FlavorForm />
				<hr/>
				<Reservation />
				<hr/>
				<a href="https://reactjs.org/docs/forms.html">Go to React docs</a>
				<br/><a href="/list">Back to List</a>
			</React.Fragment>
		);
	}
}
