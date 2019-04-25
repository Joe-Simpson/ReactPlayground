import React, { Component } from 'react';
import ReactPoseBasic from './ReactPoseBasic';
import ListLink from './ListLink';

export default class ReactPose extends Component {
	render() {
		return (
			<div className="ReactPose-container">
				<ReactPoseBasic />
				<ListLink />
			</div>
		);
	}
}
