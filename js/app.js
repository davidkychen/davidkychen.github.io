var app = angular.module('NoteApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/stores/:id',{
			controller: "StoreController",
			templateUrl: 'views/stores.html'
		})
		.otherwise({
			redirect: '/'
		});
});