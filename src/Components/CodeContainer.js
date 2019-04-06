import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Snippet from './Snippet';
import './Styles/CodeContainer.css';

class CodeContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: this.props.data.title,
			commands: this.props.data.commands,
		}
	}

	editSnippet = (newSnip, index) => {
		const modifiedCmd = this.state.commands.slice();
		modifiedCmd[index] = newSnip;
		this.setState({
			commands: modifiedCmd
		});
	}

	// Adds an empty snippet field in edit mode
	addSnippet = () => {
		const modifiedCmd = this.state.commands.slice();
		modifiedCmd.push("");
		this.setState({
			commands: modifiedCmd,
		});
	}

	render() {
		const commands = this.state.commands;
		const plusIcon = <FontAwesomeIcon icon={faPlus} size="1x" />;
		const yes = true;
		const no = false;
		return (
			<div className="main-container">
				<div className="container-header">
				<h3 className="container-title">{this.state.title}</h3>
				<button onClick={this.addSnippet} className="btn add-btn">{plusIcon}</button>
				</div>
				<div className="container-snippets">
					{commands.map((cmd, index) => <Snippet isEditting={no} editHandler={this.editSnippet} index={index} key={cmd} snippetLine={cmd} />		
					)}
				</div>

			</div>
		);
	}
}

export default CodeContainer;
