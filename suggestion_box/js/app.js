var app = angular.module('SuggestionBox',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/suggestions/:id',{
			controller: 'NoteController',
			templateUrl: 'views/note.html'
		})
		.otherwise({
			redirect: '/'
		});
});