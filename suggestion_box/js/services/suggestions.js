app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts: [
			{
				title: 'Fried rice at Trader Joe\'s',
				upvotes: 20,
				comments: [],
			},
			{
				title: 'Dried mango at Trader Joe\'s',
				upvotes: 21,
				comments: [],
			},
			{
				title: "Mocha ice cream",
				upvotes: 1,
				comments: [],
			},
			{
				title: 'Shu mai (Chicken)',
				upvotes: 19,
				comments: [
					{
						body: 'Pan fry is good',
						upvote: 10,
					}
				],
			}
		]
	};
	return demoSuggestions;
}]);