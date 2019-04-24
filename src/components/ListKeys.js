import React, { Component } from 'react';

const numbers = [1, 2, 3, 4, 5, 6];

function ListItem(props) {
	const value = props.value;
	return <li>{value}</li>;
}

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number, i) =>
		<ListItem key={i} value={number} />
	);
	return (
		<ul>{listItems}</ul>
	);
}

export default class ListKeys extends Component {
	render() {
		return (
			<React.Fragment>
				<NumberList numbers={numbers}/>
				<a href="https://reactjs.org/docs/lists-and-keys.html">Go to React docs</a>
				<br/><a href="/list">Back to List</a>
			</React.Fragment>
		);
	}
}
