angular.module('myApp',[])
	.controller('CalculatorCtrl', function($scope) {

		$scope.submit = function() {
			if ($scope.waitstaffForm.$valid) {
				console.log('submitted!');
			} else {
				console.log('invalid!');
			}
		};

	});