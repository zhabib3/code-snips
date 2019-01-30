import React, { Component } from 'react';
import Snippet from './Snippet';
import './Styles/CodeContainer.css';

class CodeContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: this.props.data.title,
			commands: this.props.data.commands
		}
	}

	editSnippet = (newSnip, index) => {
		const modifiedCmd = this.state.commands.slice();
		modifiedCmd[index] = newSnip;
		this.setState({
			commands: modifiedCmd
		});
	}

	render() {
		const commands = this.state.commands;
		return (
			<div className="main-container">
				<h3 className="container-title">{this.state.title}</h3>
				<div className="container-snippets">
					{commands.map((cmd, index) =>
						<Snippet editHandler={this.editSnippet} index={index} key={cmd} snippetLine={cmd} />
					)}
				</div>

			</div>
		);
	}
}

export default CodeContainer;
