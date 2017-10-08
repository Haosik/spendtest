// For adding mocked categories to localStorage
export function addCategoriesStorage() {
	const categoriesList = [{
		'id': 1,
		'type': 'expense',
		'name': 'Clothes',
		'color': 'darkmagenta',
		'editing': false
	},
	{
		'id': 2,
		'type': 'expense',
		'name': 'Car',
		'color': 'orange',
		'editing': false
	},
	{
		'id': 3,
		'type': 'income',
		'name': 'Job',
		'color': 'green',
		'editing': false
	},
	{
		'id': 4,
		'type': 'income',
		'name': 'Aliexpress',
		'color': 'cyan',
		'editing': false
	}
	];

	const colors = [
		'tomato', 'orange', 'darkmagenta', 'cyan', 'brown', 'gold', 'indigo', 'mediumslateblue', 'navy', 'yellow', 'green'
	]

	localStorage.setItem('categoriesList', JSON.stringify(categoriesList));
	localStorage.setItem('colorsList', JSON.stringify(colors));
};

export const fetchCategoriesList = new Promise(function (resolve, reject) {
	resolve(JSON.parse(localStorage.getItem('categoriesList')));
});
export const fetchColorsList = new Promise(function (resolve, reject) {
	resolve(JSON.parse(localStorage.getItem('colorsList')));
});

// const transactionsList = [{}];

export const Add = () => {
	localStorage.setItem()
};