import React, { Component } from 'react';

export default class CategoryItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newEditedType: this.props.category.type,
			newEditedName: this.props.category.name
		}
	}

	setNewType = (data) => {
		this.setState({
			newEditedType: data.target.value
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
				{
					this.props.category.editing
						? <form action="#" onSubmit={(e) => {
							e.preventDefault();
							this.props.saveEditedItemHandler(this.props.category, this.state.newEditedType, this.state.newEditedName)
						}
						}>
							<select className="categories-input" name="newType" id="newCategoryType" onChange={(e) => this.setNewType(e)}>
								<option value={this.props.category.type}>{this.props.category.type}</option>
								<option value={this.props.category.type === 'expense'
									? 'income'
									: 'expense'}>
									{this.props.category.type === 'expense' ? 'income' : 'expense'}
								</option>
							</select>
							<input className="categories-input"
								type="text"
								name="newName"
								defaultValue={this.props.category.name}
								id="newCategoryName"
								onChange={(e) => this.setNewName(e)} />
							{this.props.category.editing
								? <button className="categories-item__btn">Save</button>
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
				< div >

					<button className="categories-item__btn" onClick={() => this.props.toggleEditItemHandler(this.props.category)}>Edit</button>
					<button className="categories-item__btn" onClick={() => this.props.deleteItemHandler(this.props.category)}>Delete</button>
				</div>
			</li>
		)
	}
}