angular.module('routerRoutes', ['ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
    	templateUrl: 'views/pages/home.html',
    	controller: 'mainController',
    	controllerAs: 'home'
    })
    .when('/home', {
    	templateUrl : 'views/pages/home.html',
    	controller  : 'homeController',
    	controllerAs: 'home'
    });

    // set our app up to have pretty URLS
    $locationProvider.html5Mode(true);
});