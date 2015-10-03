var app = angular.module('race.directives', [])

app.controller('CountdownController', ['$scope', function ($scope) {
    $scope.eventDate = new Date("October 10, 2015 8:30:00");

    var updateClock = function(){
        $scope.seconds = ($scope.eventDate - new Date()) / 1000;

        $scope.countdown = {
            days: ('0' + parseInt($scope.seconds / 86400 )).slice(-2),
            hours: ('0' + parseInt($scope.seconds % 86400 / 3600 )).slice(-2),
            minutes: ('0' + parseInt($scope.seconds % 86400 % 3600 / 60 )).slice(-2),
            seconds: ('0' + parseInt($scope.seconds % 86400 % 3600 % 60 )).slice(-2)
        };
    };

    setInterval(function(){
        $scope.$apply(updateClock);
    }, 1000);

    updateClock();
}]);


app.directive('countdown', function(){
	return {
		templateUrl: function(){ 
            return '/components/countdown/countdown.html'
        }
	}
});
