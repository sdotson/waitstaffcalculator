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

	.run(function($rootScope, $location) {
		$rootScope.meals = [];
		$rootScope.$on('$routeChangeError', function() {
        $location.path('/error');
    });
	})

	.controller('HomeCtrl', function($rootScope) {

	})

	.controller('NewMealCtrl', function($scope, $rootScope) {
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
	})

	.controller('MyEarningsCtrl', function($scope,$rootScope) {

		function findTotal(obj, key) {
			var total = 0;
			for (var i = 0; i < obj.length; i++) {
				total += obj[i][key];
			};
			return total;
		}

		$scope.calculateTipTotal = function() {
			var tipTotal = findTotal($rootScope.meals, 'tip');
			$scope.tipTotal = tipTotal;
			return tipTotal;
		};

		$scope.calculateTipAverage = function() {
			return $scope.tipTotal/$rootScope.meals.length || 0;
		}

		$scope.reset = function() {
			$rootScope.meals = [];
			$rootScope.latestCustomer = '';
			$scope.data = '';
			$scope.mealForm.$setPristine();
		};

	})