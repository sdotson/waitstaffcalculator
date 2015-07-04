angular.module('home',['ngRoute'])
	.config(config)
	.controller('HomeCtrl', HomeCtrl)

config.$inject = ['$routeProvider'];
function config($routeProvider) {
	$routeProvider.when('/', {
    templateUrl : 'app/home/home.html',
    controller : 'HomeCtrl'
  })
  .otherwise({redirectTo: '/'});
}


function HomeCtrl() {}