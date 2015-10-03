(function() {
    'use strict';

    /* Controllers */
    var app = angular.module('race.controllers', []);

    app.controller('raceController', function($scope, $http) {
        $http({
            method: 'GET',
            url: '/api/name'
        }).
        success(function(data, status, headers, config) {
            $scope.name = data.name;
        }).
        error(function(data, status, headers, config) {
            $scope.name = 'Error!';
        });
    });
})();
