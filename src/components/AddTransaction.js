import React, { Component } from 'react';

export default class AddTransaction extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNewTransaction: false,
			newTransaction: {
				type: '',
				amount: 0,
				note: '',
				category: '',
				date: 0
			}
		}
	}
	render() {
		return (
			<section className="add-transaction__container">
				<div onClick={this.props.transactionToggleHandler} className="add-transaction__shadow"></div>
				<div className="add-transaction__inner">
					<h1 className="add-transaction__heading">Add transaction</h1>
					<form onSubmit={console.log('Added!')} action="#" className="add-transaction__form">
						<select name="" id=""></select>
					</form>
				</div>
			</section>

		)
	}
}