var filelistModule = angular.module("filelistModule", ["ui.router", "ngCookies"]);

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
    $http.get("http://localhost:8080/download?token=" + token)
        .success(function (data) {
            $scope.filenames = data;
        });
});