import React, { Component } from 'react';
import './Styles/Snippet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Snippet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			snippet: this.props.snippetLine,
			isEditing: false,
			coppiedSnippet: ''
		}
	}


	editSnippet = (event) => {
		this.setState({ snippet: event.target.value });
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
		this.setState({ isEditing: !this.state.isEditing })
	}

	// Copy Snippet to clipboard in a ridiculously roundabout way :P
	copySnippet = () => {
		const temp = document.createElement('INPUT');
		const body = document.getElementsByTagName('body')[0];
		body.appendChild(temp);
		temp.setAttribute('value', this.state.snippet);
		temp.select();
		document.execCommand('copy');
		body.removeChild(temp);

	}


	render() {
		const isEditing = this.state.isEditing;
		const submitIcon = <FontAwesomeIcon icon={faCheckSquare} size="2x" />
		const cancelIcon = <FontAwesomeIcon icon={faTimesCircle} size="2x" />
		return (
			<div className="main-snippet">
				{isEditing ||
					<div id="snippetLine" onClick={this.copySnippet}>
						{this.state.snippet}
					</div>
				}
				{/* Render Edit Div if editToggle is true */}
				{isEditing &&
					<form className="edit-div">
						<input
							className="input-snippet"
							type="text"
							value={this.state.snippet}
							onChange={this.editSnippet}
						></input>
						<button className="btn submit-btn" type="submit" onClick={this.saveSnippet}>{submitIcon}</button>
						<button className="btn cancel-btn" type="button" onClick={this.cancelEdit}>{cancelIcon}</button>

					</form>
				}
				{/* Render Edit Button if editToggle is false */}
				{isEditing ||
					<button className="btn edit-btn" type="button" onClick={this.toggleEdit}><i className="far fa-edit"></i></button>
				}
			</div>
		);
	}
}

export default Snippet;