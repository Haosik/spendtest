import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { fetchCategoriesList } from '../lib/helpers';

export default class CategoriesList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categoriesList: [],
			categoriesDidFetch: false
		};
	}

	componentWillMount() {
		fetchCategoriesList.then(result => {
			this.setState({
				categoriesList: result,
				categoriesDidFetch: true
			})
		})
	}

	componentDidMount() {
		console.log('Mounted Categories List');
	}

	toggleEditItemHandler = (item) => {
		// Making new array in Redux way, without using Redux
		let index = this.state.categoriesList.indexOf(item);
		let newCategoriesList = [...this.state.categoriesList];
		newCategoriesList[index]['editing'] = !(newCategoriesList[index]['editing']);
		this.setState({
			categoriesList: newCategoriesList
		});
	}
	saveEditedItemHandler = (item, newType, newName) => {
		// Making new array in Redux way, without using Redux
		let index = this.state.categoriesList.indexOf(item);
		let newCategoriesList = [...this.state.categoriesList];
		newCategoriesList[index]['type'] = newType;
		newCategoriesList[index]['name'] = newName;
		newCategoriesList[index]['editing'] = false;
		this.setState({
			categoriesList: newCategoriesList
		});
	}

	render() {
		return (
			<section className="categories-container box">
				<h1>Categories List container</h1>
				{this.state.categoriesDidFetch
					? <ul className="categories-list">
						{this.state.categoriesList.map((item, ind) =>
							<CategoryItem
								toggleEditItemHandler={this.toggleEditItemHandler}
								saveEditedItemHandler={this.saveEditedItemHandler}
								category={item}
								key={item.id}>
							</CategoryItem>
						)}
					</ul>
					: ''}

			</section>
		)
	}
}