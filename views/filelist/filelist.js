var filelistModule = angular.module("filelistModule", ["ui.router", "ngCookies"]);

var host = "http://localhost:8080";

/* Routes */

filelistModule.config(function ($stateProvider) {
    $stateProvider.state("filelist", {
        url: "/filelist",
        controller: "filelistController",
        templateUrl: "views/filelist/filelist.html"
    });
});



/* Controllers */

filelistModule.controller("filelistController", function ($scope, $http, $cookies) {
    var token = $cookies.token;
    $http.get(host + "/download?token=" + token)
        .success(function (data) {
            $scope.filenames = data;
            $scope.host = host;
            $scope.token = $cookies.token;
        });
});