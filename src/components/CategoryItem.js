import React, { Component } from 'react';

export default class CategoryItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newEditedColor: this.props.category.color,
			newEditedName: this.props.category.name
		}
	}

	setNewColor = (data) => {
		this.setState({
			newEditedColor: data.target.value
		});
	}
	setNewName = (data) => {
		this.setState({
			newEditedName: data.target.value
		});
	}

	render() {
		return (
			<li className="categories-item" >
				{this.props.category.editing
					?
					<form action="#" onSubmit={(e) => {
						e.preventDefault();
						this.props.saveEditedItemHandler(this.props.category, this.state.newEditedColor, this.state.newEditedName)
					}
					}>
						<select
							className="default-input"
							name="newColor"
							id="newCategoryColor"
							defaultValue={this.props.category.color}
							onChange={(e) => this.setNewColor(e)}>
							{(this.props.colors).map((elem, ind) => {
								return <option
									style={{ color: this.props.colors[ind] }}
									key={ind}
									value={this.props.colors[ind]}>
									{this.props.colors[ind]}
								</option>
							})}
						</select>
						<input className="default-input"
							type="text"
							name="newName"
							defaultValue={this.props.category.name}
							id="newCategoryName"
							onChange={(e) => this.setNewName(e)} />
						{this.props.category.editing
							? <button className="categories-item__btn">Save</button>
							: ''}
					</form>
					:
					<div>
						<span
							className="categories-span categories-span__type"
							style={{ color: this.props.category.type.toLowerCase() === 'income' ? 'green' : 'red' }}>
							{this.props.category.type}
						</span>
						<span style={{ color: this.props.category.color }} className="categories-span categories-span__name">{this.props.category.name}</span>
					</div>
				}
				<div>
					<button className="categories-item__btn" onClick={() => this.props.toggleEditItemHandler(this.props.category)}>Edit</button>
					<button className="categories-item__btn" onClick={() => this.props.deleteItemHandler(this.props.category)}>Delete</button>
				</div>
			</li>
		)
	}
}