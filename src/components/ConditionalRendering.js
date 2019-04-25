import React, { Component } from 'react';
import ListLink from './ListLink';

// We create two function components
// 1.
function UserGreeting(props) {
	return <h1>Welcome back!</h1>;
}
// 2.
function GuestGreeting(props) {
	return <h1>Please sign up.</h1>
}

// Create Greeting component that displays either of the components depeneding on the login status
function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}

// Create two buttons as function components that will update login status
// 1.
function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}
// 2.
function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}

// Create a stateful component that will render LoginButton or LogoutButton depeneding on its current state
// It also renders the Greeting component
class LoginControl extends Component {
	// Initialise state and bind functions to 'this'
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}
	// Create login and logout buttons which update local state
	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
		// Get login status from state
		const isLoggedIn = this.state.isLoggedIn;
		let button;
		// Conditionally assign login or logout button to a variable depeneding on state
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
				{/* Inline If-Else with conditional operator */}
				<div>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>
			</div>
		);
	}
}

// Inline If with Logical && Operator
function Mailbox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>
			{unreadMessages.length > 0 &&
				<h2>
					You have {unreadMessages.length} unread messages.
				</h2>
			}
		</div>
	);
}

const messages = ['Hi','Yellow','17','Never!'];

// Preventing components from rendering
// To do this, return null instead of its render output
// Reurning null from a component's render method does not affect the firing of lifecycle events
function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}

	return (
		<div>
			Warning!
		</div>
	);
}

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {showWarning: true};
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(state => ({
			showWarning: !state.showWarning
		}));
	}

	render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Hide' : 'Show'}
				</button>
			</div>
		);
	}
}

export default class ConditionalRendering extends Component {
	render() {
		return (
			<React.Fragment>
				<LoginControl />
				<br/><Mailbox unreadMessages={messages} />
				<br/><Page />
				<a href="https://reactjs.org/docs/conditional-rendering.html">Go to React docs</a>
				<ListLink />
			</React.Fragment>
		);
	}
}
