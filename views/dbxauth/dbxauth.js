var dbxauthModule = angular.module("dbxauthModule", ["ui.router", "ngCookies"]);
var host = "http://localhost:8080";
/* Routes */

dbxauthModule.config(function ($stateProvider) {
    $stateProvider
        .state("dbxauth", {
            url: "/dbxauth",
            controller: "dbxauthController",
            templateUrl: "views/dbxauth/dbxauth.html"
        })
        .state("authkey", {
            url: "/authkey",
            controller: "authkeyController",
            templateUrl: "views/dbxauth/authkey.html"
        })
});

/* Controllers */

dbxauthModule.controller("dbxauthController", function ($scope, $cookies, $location, $http) {
    $scope.username = $cookies.username;

    $scope.submitAppKeySecret = function (appkey, appsecret) {
        $http.get(host + "/account/dbxauth?appkey=" + appkey + "&appsecret=" + appsecret + "&token=" + $cookies.token)
            .success(function (data) {
                window.open(data);
                $location.path("/authkey");
            });
    };
})
.controller("authkeyController", function ($scope, $http, $cookies, $location) {
        $scope.enterAuthKey = function (authkey) {
            $http.put(host + "/account/" + authkey + "?token=" + $cookies.token)
                .success(function (data) {
                    $location.path("/account")
                });
        };
    });