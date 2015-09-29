'use strict';

/* Directives */
angular.module('race.directives', [])
.directive('appVersion', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
})
.directive('raceSection', function() {
	return {
		templateUrl: function(element, attr) {
			return '/partials/' + attr.section ;
		}
	}
})
