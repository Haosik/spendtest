import React, { Component } from 'react';

export default class Overview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			charts: 'by month'
		};
	};

	componentWillMount() {
		console.log('Mounted Overview');
	}

	render() {
		return (
			<div className="overview-container box">
				<h1>Overview container</h1>
				<p>{this.state.charts}</p>
			</div>
		)
	}
}