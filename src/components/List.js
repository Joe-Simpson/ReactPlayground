import React, { Component } from 'react';
import '../css/App.css';
import list from '../assets/ListArray';

function ListItem(props) {
	let status = props.completed ? 'List-complete' : 'List-in-progress';
	status = props.error ? 'List-error' : status;
	return (
		<li><a href={props.link} className={status}>{props.title}</a></li>
	);
}

function ListBody(props) {
	const links = props.links;
	const listItems = links.map((link, i) =>
		<ListItem
			key={i}
			link={link.link}
			completed={link.completed}
			title={link.title}
			error={link.error}
		/>
	);
	return (
		<ul className="List-body">{listItems}</ul>
	);
}

export default class List extends Component {
	render() {
		return (
			<div className="List-container">
				<div className="List-header">
					<h1>Playgrounds</h1>
				</div>
				<ListBody links={list} />
			</div>
		);
	}
}
