angular.module('myApp',['home','newMeal', 'myEarnings'])
	.run(function($rootScope) {
		$rootScope.meals = [];
	})
