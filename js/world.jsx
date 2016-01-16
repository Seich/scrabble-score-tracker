import React from 'react';

class World extends React.Component {
	render() {
		return <h2>World</h2>;
	}
}

React.render(<World/>, document.getElementById('world'));