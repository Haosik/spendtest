import React from 'react';

export default function CategoryItem(props) {

	let newEditedType = props.category.type;
	let newEditedName = props.category.name;

	function setNewType(data) {
		newEditedType = data.target.value;
	}
	function setNewName(data) {
		newEditedName = data.target.value;
	}

	return (
		<li className="categories-item">
			{props.category.editing
				? <form action="#" onSubmit={(e) => {
					e.preventDefault();
					props.saveEditedItemHandler(props.category, newEditedType, newEditedName)
				}
				}>
					<select className="categories-input" name="newType" id="newCategoryType" onChange={(e) => setNewType(e)}>
						<option value={props.category.type}>{props.category.type}</option>
						<option value={props.category.type === 'expense' ? 'income' : 'expense'}>{props.category.type === 'expense' ? 'income' : 'expense'}</option>
					</select>
					<input className="categories-input" type="text" name="newName" defaultValue={props.category.name} id="newCategoryName" onChange={(e) => setNewName(e)} />
					{props.category.editing
						? <button className="categories-item__btn">Save</button>
						: ''}
				</form>
				: <div>
					<span
						className="categories-span categories-span__type"
						style={{ color: props.category.type.toLowerCase() === 'income' ? 'green' : 'red' }}>
						{props.category.type}
					</span>
					<span className="categories-span categories-span__name">{props.category.name}</span>
				</div>
			}
			<div>

				<button className="categories-item__btn" onClick={() => props.toggleEditItemHandler(props.category)}>Edit</button>
				<button className="categories-item__btn" onClick={() => props.deleteItemHandler(props.category)}>Delete</button>
			</div>
		</li>
	)
}