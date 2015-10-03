(function(){
	'use strict';

	/* Declare app level module which depends on filters, and services */

	var app = angular.module('race', [
		'ngNewRouter',
		'race.controllers',
		'race.filters',
		'race.services',
		'race.directives',
		'race.components'
		]);
})();
