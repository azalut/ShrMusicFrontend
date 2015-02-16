var app = angular.module("mainApp", [
    "ui.router",
    "ngCookies",
    "accountModule",
    "createModule",
    "dbxauthModule",
    "filelistModule",
    "loginModule"
]);


app.config(function ($stateProvider) {
    $stateProvider.state("home", {
        url: "",
        controller: "homeController",
        templateUrl: "login-home.html"
    });
});

app.controller("homeController", function ($scope, $cookies) {
    $scope.kupa = "kuupaa";
});