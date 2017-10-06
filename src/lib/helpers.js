// For adding mocked categories to localStorage
export function addCategoriesStorage() {
	const categoriesList = [{
		'id': 1,
		'type': 'expense',
		'name': 'Clothes',
		'editing': false
	},
	{
		'id': 2,
		'type': 'expense',
		'name': 'Car',
		'editing': false
	},
	{
		'id': 3,
		'type': 'income',
		'name': 'Job',
		'editing': false
	},
	{
		'id': 4,
		'type': 'income',
		'name': 'Aliexpress',
		'editing': false
	}
	];

	localStorage.setItem('categoriesList', JSON.stringify(categoriesList));
};

export const fetchCategoriesList = new Promise(function (resolve, reject) {
	resolve(JSON.parse(localStorage.getItem('categoriesList')));
});

// const transactionsList = [{}];

export const Add = () => {
	localStorage.setItem()
};