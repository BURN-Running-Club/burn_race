'use strict';

/* Directives */
var app = angular.module('race.directives', [])

app.directive('appVersion', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
});

app.directive('raceSection', function() {
	return {
		templateUrl: function(element, attr) {
			console.log('app/coyote-hills/' + attr.section + '.html')
			return '/app/coyote-hills/' + attr.section;
		}
	}
});
