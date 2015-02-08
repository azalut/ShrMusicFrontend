var createModule = angular.module("createModule", ["ui.router", "ngCookies"]);

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
            url: "http://localhost:8080/user",
            data: $.param({username: username, password: password}),
            headers: {'Content-Type': "application/x-www-form-urlencoded"}
        }).success(function (data, status, headers) {
            if(status == '201'){
                $cookies.username = username;
                $http({
                    method: "POST",
                    url: "http://localhost:8080/gettoken",
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
