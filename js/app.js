import '../style/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './CommentBox';

ReactDOM.render(
	<CommentBox url="/comments.json" pollInterval={4000} />, 
	document.getElementById('content')
);