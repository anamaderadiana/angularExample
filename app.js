"use strict"

console.log('aaa');

var myApp = angular.module('myApp', []);

myApp.controller('MyController', function($scope){
    $scope.message = "Hello";
});