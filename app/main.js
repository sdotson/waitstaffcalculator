angular.module('myApp',['home','newMeal', 'myEarnings', 'ngAnimate'])
	.run(function($rootScope) {
		$rootScope.meals = [];
	})
