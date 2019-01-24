import React, { Component } from 'react';

class CodeContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: this.props.data.title,
			commands: this.props.data.commands
		}
	}

	render() {
		const commands = this.state.commands;
		return (
			<div>
				<ul>
					<h3>{this.state.title}</h3>
					{commands.map((cmd) =>
						<li>{cmd}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default CodeContainer;
