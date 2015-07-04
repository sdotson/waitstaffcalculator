angular.module('myEarnings',['ngRoute'])
	.config(config)
	.controller('MyEarningsCtrl', MyEarningsCtrl);

config.$inject = ['$routeProvider'];
function config($routeProvider) {
	$routeProvider.when('/myearnings', {
    templateUrl : 'app/myearnings/my-earnings.html',
    controller : 'MyEarningsCtrl'
  })
  .otherwise({redirectTo: '/'});
}

MyEarningsCtrl.$inject = ['$scope','$rootScope'];
function MyEarningsCtrl($scope,$rootScope) {
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
	};

}