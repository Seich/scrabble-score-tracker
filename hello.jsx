import React from 'react';

require('./style/screen.scss');

class Hello extends React.Component {
	render() {
		return <h1>Hello</h1>
	}
}

React.render(<Hello/>, document.getElementById('hello'));