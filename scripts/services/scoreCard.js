var app = angular.module("myApp", []);
app.controller('cardCtrl', function($scope) {
    $scope.name = "John Doe";
    $scope.teetime = "9:00";
});