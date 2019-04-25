import React, { Component } from 'react';
import Tree from './Tree';
import ListLink from './ListLink';

export default class TreeView extends Component {

	// Store currently selected file in state
	state = {
		selectedFile: null,
	};

	// Update currently selected file
	onSelect = (file) => this.setState({ selectedFile: file })
	
	render() {
		const { selectedFile } = this.state;
		
		const data = {
			'/root': {
				path: '/root',
				type: 'folder',
				isRoot: true,
				children: ['/root/david', '/root/jslancer'],
			},
			'/root2': {
				path: '/root2',
				type: 'folder',
				isRoot: true,
				children: ['/root/david'],
			},
			'/root/david': {
				path: '/root/david',
				type: 'folder',
				children: ['/root/david/readme.md', '/root/david/readme2.md'],
			},
			'/root/david/readme.md': {
				path: '/root/david/readme.md',
				type: 'file',
				content: 'Thanks for reading me. But there is nothing here.',
			},
			'/root/david/readme2.md': {
				path: '/root/david/readme2.md',
				type: 'file',
				content: 'Thanks for reading me. But there is nothing here. Again.',
			},
			'/root/jslancer': {
				path: '/root/jslancer',
				type: 'folder',
				children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
			},
			'/root/jslancer/projects': {
				path: '/root/jslancer/projects',
				type: 'folder',
				children: ['/root/jslancer/projects/treeview'],
			},
			'/root/jslancer/projects/treeview': {
				path: '/root/jslancer/projects/treeview',
				type: 'folder',
				children: [],
			},
			'/root/jslancer/vblogs': {
				path: '/root/jslancer/vblogs',
				type: 'folder',
				children: [],
			},
		};

		return (
			<div>
				<Tree onSelect={this.onSelect} data={data}/>
				{ selectedFile && selectedFile.type === 'file' && selectedFile.content }
				<ListLink />
			</div>
			
		);
	}
}
