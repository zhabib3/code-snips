import React, { Component } from 'react';

class Snippet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			snippet: this.props.snippetLine,
			isEditing: false
		}
	}


	editSnippet = (event) => {
		this.setState({snippet: event.target.value});
	}

	// Saves the editted input to CodeContainer
	saveSnippet = () => {
		this.props.editHandler(this.state.snippet, this.props.index);
	}

	// Cancel Snippet Edit
	cancelEdit = () => {
		this.setState({
			snippet: this.props.snippetLine,
			isEditing: false
		});
	}

	// Toggles visibility of snippet input
	toggleEdit = () => {
		this.setState({isEditing: !this.state.isEditing})
	}

	// Copy Snippet to clipboard
	copySnippet = () => {
		
	}

	render() {
		const isEditing = this.state.isEditing;
		return (
			<div>
				<p>- {this.state.snippet}</p>
				{isEditing &&
				<form className="edit-div">
					<input type="text" value={this.state.snippet} onChange={this.editSnippet}></input>
					<input type="submit" onClick={this.saveSnippet} value="Submit" />
					<button type="button" onClick={this.cancelEdit}>Cancel</button>

				</form>
				}
				<button type="button" onClick={this.toggleEdit}>Edit</button>
			</div>
		);
	}
}

export default Snippet;