import React, { Component } from 'react';
import { fetchCategoriesList, fetchColorsList } from '../lib/helpers';

export default class AddTransaction extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeCategoryType: 'income',
			activeCategory: 'Car',
			categoriesListShown: true,
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
			});
		});
		fetchColorsList.then(result => {
			result.sort();
			this.setState({
				colorsList: result,
			})
		});
	}

	setCategoryTypeIncome = () => {
		this.setState({
			activeCategoryType: 'income'
		});
	}
	setCategoryTypeExpense = () => {
		this.setState({
			activeCategoryType: 'expense'
		});
	}
	setActiveCategory = (data) => {
		this.setState({
			activeCategory: data
		});
		this.closeCategoriesList();
	}
	openCategoriesList = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			categoriesListShown: true
		});
	}
	closeCategoriesList = (e) => {
		this.setState({
			categoriesListShown: false
		});
	}

	render() {
		return (
			<section className="add-transaction__container">
				<div onClick={this.props.transactionToggleHandler} className="add-transaction__shadow"></div>
				<div className="add-transaction__inner" onClick={(e) => this.closeCategoriesList(e)}>
					<h1 className="add-transaction__heading">Add transaction</h1>
					<form onSubmit={(e) => e.preventDefault()} action="#" className="add-transaction__form">
						<div className="add-transaction__category-wrap">
							<input onClick={(e) => this.openCategoriesList(e)}
								type="text"
								className="default-input add-transaction__category-input"
								readOnly
								value={this.state.activeCategory} />
							{this.state.categoriesListShown
								? <div onClick={(e) => {e.preventDefault(); e.stopPropagation();}} className="add-transaction__category-flying">
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
												return <li key={item.id} className="add-transaction__category-item">
													<span
														onClick={() => this.setActiveCategory(item.name)}
														className="add-transaction__category-link"
														style={{ color: item.color}}>
														{item.name}
													</span>
												</li>
											})
											: (this.state.expenseCategoriesList).map((item, ind) => {
												return <li key={item.id} className="add-transaction__category-item">
													<span
														onClick={() => this.setActiveCategory(item.name)}
														className="add-transaction__category-link"
														style={{ color: item.color}}>
														{item.name}
													</span>
												</li>
											})}
									</ul>
								</div>
								: null}
						</div>
						<input type="date" className="default-input" />
						<input type="text" className="default-input" />
						<input type="number" className="default-input" />
					</form>
				</div>
			</section>

		)
	}
}