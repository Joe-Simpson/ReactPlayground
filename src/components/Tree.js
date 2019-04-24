import React, { Component } from 'react';
import values from 'lodash/values';
import TreeNode from './TreeNode';



export default class Tree extends Component {
	state = {
		nodes: this.props.data,
	};

	getRootNodes = () => {
		const { nodes } = this.state;
		return values(nodes).filter(node => node.isRoot === true);
	}

	getChildNodes = (node) => {
		const { nodes } = this.state;
		if (!node.children) return [];
		return node.children.map(path => nodes[path]);
	}

	onToggle = (node) => {
		const { nodes } = this.state;
		nodes[node.path].isOpen = !node.isOpen;
		this.setState({ nodes });
	}

	onNodeSelect = (node) => {
		const { onSelect } = this.props;
		onSelect(node);
	}

	render() {
		const rootNodes = this.getRootNodes();
		return (
			<div>
				{ rootNodes.map((node, i) => (
					<TreeNode
						node={node}
						getChildNodes={this.getChildNodes}
						onToggle={this.onToggle}
						onNodeSelect={this.onNodeSelect}
						key={i}
					/>
				))}
			</div>
		);
	}
}
