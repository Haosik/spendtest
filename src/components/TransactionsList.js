import React, { Component } from 'react';
import AddTransaction from './AddTransaction';
import { fetchCategoriesList } from '../lib/helpers';

const transactions = [
	{ 'id': 1, 'type': 'income', 'amount': 2000, 'note': 'Monthly salary', 'category': 'Job', 'date': 1507116277956 },
	{ 'id': 2, 'type': 'income', 'amount': 200, 'note': '', 'category': 'Car', 'date': 1507126487305 },
	{ 'id': 3, 'type': 'expense', 'amount': 300, 'note': 'T-shirt', 'category': 'Clothes', 'date': 1507126635942 }
];

export default class TransactionsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			categoriesDidFetch: false,
			transactions: [],
			addTransactionVisible: false
		};
	}
	componentWillMount() {
		fetchCategoriesList.then(result => {
			this.setState({
				categoriesList: result,
				categoriesDidFetch: true
			})
		})

		this.setState({
			transactions
		})
	}
	componentDidMount() {
		console.log('Mounted Transactions List');
	}

	addTransactionToggle = () => {
		this.setState({
			addTransactionVisible: !this.state.addTransactionVisible
		})
	}

	render() {
		return (
			<section className="transactions-container box">
				{this.state.addTransactionVisible ? <AddTransaction transactionToggleHandler={this.addTransactionToggle}></AddTransaction> : ''}

				<h2>Transactions List</h2>
				<button className="add-transaction-btn" onClick={this.addTransactionToggle}>
					<span>{this.state.addTransactionVisible ? 'Close' : 'Add transaction'}</span>
				</button>
				<ul>
					{this.state.transactions.map((item, ind) =>
						<li key={item.id}>{item.type}</li>
					)}
				</ul>
			</section>
		)
	}
}