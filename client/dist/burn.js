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

(function($) {
    $(document).ready(function() {
        /* carousel */
        $('.carousel').carousel({
            interval: 5000
        });
        $('.carousel').swipe({
            swipeLeft: function() {
                $(this).carousel('next');
            },
            swipeRight: function() {
                $(this).carousel('prev');
            }
        });
        /* smooth scroll */
        $('a.scroll').click(function() {
            var scrollTop = Number($($.attr(this, 'href')).offset().top) + Number($(this).attr('data-scroll-adjust')) + $('#nav').height();
            $('html, body').animate({
                scrollTop: scrollTop
            }, 500);
            return false;
        });
        /* accordian */
        $('#faq ul li').click(function() {
            $(this).find('i').toggleClass('fa-plus-circle fa-minus-circle');
        });
        /* hero image background */
        $('.center-crop').centerCrop();
        /* ajax submit contact form */
        $('#contact-form').submit(function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: $('#contact-form').attr('action'),
                dataType: "json",
                data: $('#contact-form').serialize(),
                success: function(response) {
                    if (response.cap === true) {
                        if (response.mail === true) {
                            msg = "Mail sent";
                            $('#contact-form')[0].reset();
                        } else {
                            msg = "We are sorry, but there appears to be a problem with the form you submitted.";
                        }
                        $('.captcha-status').removeClass('error').text(msg).show().delay(5000).fadeOut('slow');
                    } else {
                        $('.captcha-status').addClass('error').text("Human verification Wrong!").fadeIn();
                    }
                },
                beforeSend: function() {
                    $('.captcha-status').text('Sending...');
                }
            });
        });
    });
    $.fn.centerCrop = function() {
        $img = $(this);
        $parent = $img.parent();
        var cropCenter = function() {
            $img.css({
                'margin-left': 0.5 * ($parent.width() - $img.width())
            });
            $parent.css({
                position: 'relative',
                overflow: 'hidden'
            });
        };
        var fullWidth = function() {
            $img.css({
                width: '100%'
            });
        };
        var adjust = function() {
            if ($img.width() < $parent.width()) {
                fullWidth();
            } else {
                cropCenter();
            }
        };
        $img.on('load', function() {
            adjust();
        });
        $(window).on('resize', function() {
            adjust();
        });
    };
})(jQuery);

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

(function() {
	'use strict';

	/* Filters */

	angular.module('race.filters', [])
	.filter('interpolate', function (version) {
		return function (text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	});
})();

(function(){
	'use strict';

	/* Services */
	angular.module('race.services', []) 
	.value('version', '0.1');
})();

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
