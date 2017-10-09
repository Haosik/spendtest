import React, { Component } from 'react';
import { fetchCategoriesList, fetchColorsList } from '../lib/helpers';

export default class AddTransaction extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeCategoryType: 'income',
			activeCategory: 'Car',
			isNewTransaction: false,
			newTransaction: {
				type: '',
				category: '',
				date: 0,
				note: '',
				amount: 0
			},
			categoriesList: [],
			incomeCategoriesList: [],
			expenseCategoriesList: [],
			colorsList: [],
			categoriesDidFetch: false
		}
	}
	componentWillMount() {
		fetchCategoriesList.then(result => {
			const incomeCategoriesList = result.filter((item) => item.type === 'income');
			const expenseCategoriesList = result.filter((item) => item.type === 'expense');
			this.setState({
				categoriesList: result,
				incomeCategoriesList,
				expenseCategoriesList,
				categoriesDidFetch: true
			})
		})
		fetchColorsList.then(result => {
			result.sort();
			this.setState({
				colorsList: result,
			})
		})
	}

	setCategoryTypeIncome = () => {
		this.setState({
			activeCategoryType: 'income'
		})
	}
	setCategoryTypeExpense = () => {
		this.setState({
			activeCategoryType: 'expense'
		})
	}
	setNewActiveCategoryHandler = (data) => {
		this.setState({
			activeCategory: data
		})
	}

	render() {
		return (
			<section className="add-transaction__container">
				<div onClick={this.props.transactionToggleHandler} className="add-transaction__shadow"></div>
				<div className="add-transaction__inner">
					<h1 className="add-transaction__heading">Add transaction</h1>
					<form onSubmit={(e) => e.preventDefault()} action="#" className="add-transaction__form">
						<div className="add-transaction__category-wrap">
							<input onClick={() => console.log(123)} type="text" readOnly value={this.state.activeCategory} />
							<div className="add-transaction__category-flying">
								<button
									onClick={() => this.setCategoryTypeIncome()}
									className={this.state.activeCategoryType === 'income' ? 'income-btn active' : 'income-btn'}>
									Income
								</button>
								<button
									onClick={() => this.setCategoryTypeExpense()}
									className={this.state.activeCategoryType === 'expense' ? 'expense-btn active' : 'expense-btn'}>
									Expense
								</button>
								<ul className="add-transaction__category-list">
									{this.state.activeCategoryType === 'income'
										? (this.state.incomeCategoriesList).map((item, ind) => {
											return <li key={item.id}>
												<span
												onClick={() => this.setNewActiveCategoryHandler(item.name)}
													style={{ color: item.color, cursor: 'pointer' }}>
													{item.name}
												</span>
											</li>
										})
										: (this.state.expenseCategoriesList).map((item, ind) => {
											return <li key={item.id}>
												<span
												onClick={() => this.setNewActiveCategoryHandler(item.name)}
													style={{ color: item.color, cursor: 'pointer' }}>
													{item.name}
												</span>
											</li>
										})}
								</ul>
							</div>

						</div>
						<input type="date" />
						<input type="text" />
						<input type="number" />
					</form>
				</div>
			</section>

		)
	}
}