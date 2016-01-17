import React from 'react';
import ReactDOM from 'react-dom';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	handleCommentSubmit(comment) {
		var comments = this.state.data;
		
		comment.id = Date.now();
		var newComments = comments.concat([comment]);
		this.setState({ data: newComments });
	}

	loadCommentsFromServer() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', this.props.url);
		xhr.onreadystatechange = () => {
			if (xhr.readystate <= 3 && xhr.status !== 200) return;
			
			var data = JSON.parse(xhr.responseText);

			this.setState({ data: data });
		};
		
		return xhr.send();
	}

	componentDidMount() {
		this.loadCommentsFromServer();
		//setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
	}

	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
			</div>
		);
	}
}
