'use strict';

/* Declare app level module which depends on filters, and services */

var app = angular.module('race', [
	'ngNewRouter',
	'race.controllers',
	'race.filters',
	'race.services',
	'race.directives'
]);

app.controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
	{ path: '/partials/:name', component: 'partials' }
];
function AppController ($router) {}
