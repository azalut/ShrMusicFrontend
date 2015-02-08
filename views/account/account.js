var accountModule = angular.module("accountModule", ["ui.router"]);

/* Routes */

accountModule.config(function ($stateProvider) {
    $stateProvider.state("account", {
        url: "/account",
        controller: "accountController",
        templateUrl: "views/account/account.html"
    });
});



/* Controllers */

accountModule.controller("accountController", function ($scope) {
    $scope.username = "maciek";
});