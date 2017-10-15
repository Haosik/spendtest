import React, { Component } from 'react';

export default class AddCategory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newCategory: {
				color: this.props.colors[0],
				name: '',
				type: 'expense'
			}
		}
	}

	changeNewCategoryHandler = (type, data) => {
		switch (type) {
			case 'color':
				this.setState({
					newCategory: { ...this.state.newCategory, color: data }
				});
				break;
			case 'name':
				this.setState({
					newCategory: { ...this.state.newCategory, name: data }
				});
				break;
			case 'type':
				this.setState({
					newCategory: { ...this.state.newCategory, type: data }
				})
				break;
			default: break
		}
	}

	// Change default color (by state) of new category's "color select"
	componentWillReceiveProps(nextProps) {
		if (this.props.colors !== nextProps.colors) {
			this.setState({
				newCategory: { ...this.state.newCategory, color: nextProps.colors[0] }
			})
		}
	}
	addNewItemHandler = () => {
		this.props.addNewCategory(this.state.newCategory);
		this.setState({
			newCategory: { ...this.state.newCategory, name: '' }
		})
	}

	render() {
		return (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					this.addNewItemHandler();
				}}
				action="#" className="add-category__form">
				<div>
					<label className="add-category__label" htmlFor="newCategoryColor">Color</label>
					<select
						onChange={(e) => this.changeNewCategoryHandler('color', e.target.value)}
						className="default-input"
						name="newCategoryColor"
						id="newCategoryColor"
						style={{ color: this.state.newCategory.color }}>
						{(this.props.colors).map((item, ind) => {
							return <option key={ind} style={{ color: item }}>{item}</option>
						})}
					</select>
				</div>

				<div>
					<label className="add-category__label" htmlFor="newCategoryName">Name</label>
					<input
						onChange={(e) => this.changeNewCategoryHandler('name', e.target.value)}
						className="default-input"
						type="text"
						name="newCategoryName"
						id="newCategoryName"
						placeholder="At least 1 symbol"
						value={this.state.newCategory.name} />
				</div>

				<div>
					<label className="add-category__label" htmlFor="newCategoryType">Type</label>
					<select
						onChange={(e) => this.changeNewCategoryHandler('type', e.target.value)}
						className="default-input"
						name="newCategoryType"
						id="newCategoryType"
						defaultValue="expense">
						<option value="expense">Expense</option>
						<option value="income">Income</option>
					</select>
				</div>

				{this.state.newCategory.name !== ''
					?
					<button style={{ alignSelf: 'flex-end' }} className="categories-item__btn" type="submit">Create category</button>
					: ''
				}

			</form>
		)
	}
}