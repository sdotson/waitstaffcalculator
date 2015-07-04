angular.module('newMeal',['ngRoute'])
	.config(config)
	.controller('NewMealCtrl', NewMealCtrl)

config.$inject = ['$routeProvider'];
function config($routeProvider) {
	$routeProvider.when('/newmeal', {
    templateUrl : 'app/newmeal/new-meal.html',
    controller : 'NewMealCtrl'
  })
  .otherwise({redirectTo: '/'});
}

NewMealCtrl.$inject = ['$scope','$rootScope'];

function NewMealCtrl($scope, $rootScope) {
	$scope.submitMeal = function(data) {
		if ($scope.mealForm.$valid) {
			var taxRate = data.taxRate/100,
				tipPercentage = data.tipPercentage/100, 
				subtotal = data.basePrice + data.basePrice * taxRate,
				tip = subtotal * tipPercentage,
				total = subtotal + tip,
				newMeal = {
					basePrice: data.basePrice,
					taxRate: taxRate,
					tipPercentage: tipPercentage,
					subTotal: subtotal,
					tip: tip,
					total: total,
					timestamp: new Date()
				};

			$rootScope.meals.push(newMeal);
			$rootScope.latestCustomer = newMeal;

		};
	};

	$scope.cancel = function() {
		$scope.data = '';
		$scope.mealForm.$setPristine();
	};
}