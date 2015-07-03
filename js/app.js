angular.module('myApp',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'HomeCtrl'
    })
    .when('/newmeal', {
      templateUrl : 'new-meal.html',
      controller : 'NewMealCtrl'
    })
    .when('/myearnings', {
      templateUrl : 'my-earnings.html',
      controller : 'MyEarningsCtrl'
    });
	}])

	.controller('HomeCtrl', function($scope) {

	})

	.controller('NewMealCtrl', function($scope) {
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

				$scope.meals.push(newMeal);
				$scope.latestCustomer = newMeal;

			};
		};

		$scope.cancel = function() {
			$scope.data = '';
			$scope.mealForm.$setPristine();
		};
	})

	.controller('MyEarningsCtrl', function($scope) {

		function findTotal(obj, key) {
			var total = 0;
			for (var i = 0; i < obj.length; i++) {
				total += obj[i][key];
			};
			return total;
		}

		$scope.calculateTipTotal = function() {
			var tipTotal = findTotal($scope.meals, 'tip');
			$scope.tipTotal = tipTotal;
			return tipTotal;
		};

		$scope.calculateTipAverage = function() {
			return $scope.tipTotal/$scope.meals.length || 0;
		}

		$scope.reset = function() {
			$scope.meals = [];
			$scope.latestCustomer = '';
			$scope.data = '';
			$scope.mealForm.$setPristine();
		};

	})

	.controller('CalculatorCtrl', function($scope) {

		$scope.meals = [];	

	});