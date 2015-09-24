angular.module('routerApp', ['routerRoutes'])
.controller('mainController', function() {
    var vm = this;
    vm.message = "BURN RUNNERS";
})
.controller('homeController', function() {
    var vm = this;
    vm.message = "You are the best!"
});