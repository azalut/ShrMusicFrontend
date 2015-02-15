var createModule = angular.module("createModule", ["ui.router", "ngCookies"]);
var host = "http://frozen-temple-2180.herokuapp.com";
/* Routes */

createModule.config(function ($stateProvider) {
    $stateProvider.state("create", {
        url: "",
        controller: "createController",
        templateUrl: "views/create/create.html"
    });
});

/* Controllers */

createModule.controller("createController", function ($scope, $http, $location, $cookies) {
    $scope.btninfo = "btn-success";
    $scope.creationError = "";

    $scope.createAccount = function (username, password) {
        $http({
            method: "POST",
            url: host + "/user",
            data: $.param({username: username, password: password}),
            headers: {'Content-Type': "application/x-www-form-urlencoded"}
        }).success(function (data, status, headers) {
            if(status == '201'){
                $cookies.username = username;
                $http({
                    method: "POST",
                    url: host + "/gettoken",
                    data: $.param({username: username, password: password}),
                    headers: {'Content-Type': "application/x-www-form-urlencoded"}
                }).success(function (data) {
                    $cookies.token = data;
                });
                $location.path("/dbxauth");
            }
        }).error(function () {
            $scope.btninfo = "btn-danger";
            $scope.creationError = "alert-danger";
        });
    };
});
