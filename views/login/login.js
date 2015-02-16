var filelistModule = angular.module("loginModule", ["ui.router", "ngCookies"]);
var host = "http://frozen-temple-2180.herokuapp.com";

/* Routes */

filelistModule.config(function ($stateProvider) {
    $stateProvider.state("login", {
        url: "/login",
        controller: "loginController",
        templateUrl: "views/login/login.html"
    });
});



/* Controllers */

filelistModule.controller("loginController", function ($scope, $http, $cookies, $location) {
    $scope.login = function (username, password) {
        $http.post(host + "/gettoken?username=" + username + "&password=" + password)
            .success(function (data) {
                $cookies.token = data;
                $cookies.username = username;
                $scope.ourtoken = data;
                $location.path("/account");
            });
    }
});