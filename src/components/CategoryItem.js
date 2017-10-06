import React, { Component } from 'react';

export default class CategoryItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newEditedType: this.props.category.type,
			newEditedName: this.props.category.name
		}
	}

	newItemTypeHandler = (event) => {
		if (event.target.value && event.target.value !== ' ') {
			console.log(event.target.value);
			this.setState({
				newEditedType: event.target.value
			})
		}

	}
	newItemNameHandler = (event) => {
		if (event.target.value && event.target.value !== ' ') {
			console.log(event.target.value);
			this.setState({
				newEditedName: event.target.value
			})
		}
	}


	render() {
		return (
			<li className="categories-item">
				{this.props.category.editing
					? <form action="#" onSubmit={(e) => {
						e.preventDefault();
						this.props.saveEditedItemHandler(this.props.category, this.state.newEditedType, this.state.newEditedName)
					}
					}>
						<select className="categories-input" name="newType" id="newCategoryType" onChange={(e) => this.newItemTypeHandler(e)}>
							<option value={this.props.category.type}>{this.props.category.type}</option>
							<option value={this.props.category.type === 'expense' ? 'income' : 'expense'}>{this.props.category.type === 'expense' ? 'income' : 'expense'}</option>
						</select>
						<input className="categories-input" type="text" name="newName" defaultValue={this.props.category.name} id="newCategoryName" onChange={(e) => this.newItemNameHandler(e)} />
						{this.props.category.editing
							? <button>Save</button>
							: ''}
					</form>
					: <div>
						<span
							className="categories-span categories-span__type"
							style={{ color: this.props.category.type.toLowerCase() === 'income' ? 'green' : 'red' }}>
							{this.props.category.type}
						</span>
						<span className="categories-span categories-span__name">{this.props.category.name}</span>
					</div>
				}
				<div>

					<button onClick={() => this.props.toggleEditItemHandler(this.props.category)}>Edit</button>
					<button>Delete</button>
				</div>
			</li>
		)
	}
}