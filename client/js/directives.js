(function() {
	'use strict';

	/* Directives */
	var app = angular.module('race.components', []);

	app.directive('appVersion', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	});

	app.directive('raceSection', function() {
		return {
			templateUrl: function(element, attr) {
				return 'pages/' + attr.race + '/' + attr.template;
			}
		};
	});
})();
