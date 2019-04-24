import React, { Component } from "react";
import ScrollArea from "react-scrollbar";
import "../css/App.css";

export default class ReactScrollbar extends Component {
	render() {
		return (
			<div className="ReactScrollbar-container">
				<div className="ReactScrollbar-basic">
					<ScrollArea
						speed={0.8}
						className="area"
						contentClassName="Content"
						vertical={false}
						horizontal={true}
					>
						<div key="1" className="Item">
							1
						</div>
						<div key="2" className="Item">
							2
						</div>
						<div key="3" className="Item">
							3
						</div>
						<div key="4" className="Item">
							4
						</div>
					</ScrollArea>
				</div>
			</div>
		);
	}
}
