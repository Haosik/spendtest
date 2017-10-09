import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import AddCategory from './AddCategory';
import { fetchCategoriesList, fetchColorsList } from '../lib/helpers';

export default class CategoriesList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colorsList: [],
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
		fetchColorsList.then(result => {
			result.sort();
			this.setState({
				colorsList: result,
			})
		})
	}
	componentDidMount() {
		console.log('Mounted Categories List');
	}

	toggleEditItemHandler = (item) => {
		// Making new array in Redux way, without using Redux
		const index = this.state.categoriesList.indexOf(item);
		let newCategoriesList = [...this.state.categoriesList];
		newCategoriesList[index]['editing'] = !(newCategoriesList[index]['editing']);
		this.setState({
			categoriesList: newCategoriesList
		});
	}
	saveEditedItemHandler = (item, newColor, newName) => {
		// Making new array almost in Redux way, without using Redux
		const index = this.state.categoriesList.indexOf(item);
		let newCategoriesList = [...this.state.categoriesList];
		newCategoriesList[index]['color'] = newColor;
		newCategoriesList[index]['name'] = newName;
		newCategoriesList[index]['editing'] = false;
		this.setState({
			categoriesList: newCategoriesList
		});
	}
	deleteItemHandler = (item) => {
		// Making new array in Redux way, without using Redux
		const index = this.state.categoriesList.indexOf(item);
		let newCategoriesList = [...this.state.categoriesList];
		const newCategoriesListStart = newCategoriesList.slice(0, index);
		const newCategoriesListEnd = newCategoriesList.slice(index + 1);
		newCategoriesList = newCategoriesListStart.concat(newCategoriesListEnd);
		console.log(newCategoriesList);
		console.log(index);
		this.setState({
			categoriesList: newCategoriesList
		});
	}
	addNewItemHandler = (item) => {
		const {categoriesList} = this.state;
		const newIndex = categoriesList[categoriesList.length - 1].id + 1;
		const newItem = {
			id: newIndex,
			type: item.type,
			name: item.name,
			color: item.color,
			editing: false
		};
		const newCategoriesList = [...this.state.categoriesList, newItem];
		this.setState({
			categoriesList: newCategoriesList
		});
	}

	render() {
		return (
			<section className="categories-container box">
				<h4>Create new category:</h4>
				<AddCategory addNewCategory={this.addNewItemHandler} colors={this.state.colorsList}></AddCategory>

				<h2>Categories List</h2>
				{this.state.categoriesDidFetch
					? <ul className="categories-list">
						{this.state.categoriesList.length > 0
							? this.state.categoriesList.map((item) =>
								<CategoryItem
									toggleEditItemHandler={this.toggleEditItemHandler}
									deleteItemHandler={this.deleteItemHandler}
									saveEditedItemHandler={this.saveEditedItemHandler}
									category={item}
									colors={this.state.colorsList}
									key={item.id}>
								</CategoryItem>
							)
							: <li>You have no categories :(</li>
						}
					</ul>
					: ''}

			</section>
		)
	}
}