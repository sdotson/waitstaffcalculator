angular.module('myApp',['home','newMeal', 'myEarnings', 'ngAnimate'])
	.run(function($rootScope) {
		$rootScope.meals = [];
		$rootScope.$on('$routeChangeStart', function() {
			$rootScope.isLoading = true;
		});
		$rootScope.$on('$routeChangeSuccess', function() {
			$rootScope.isLoading = false;
		});
	})
