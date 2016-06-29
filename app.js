"use strict"

console.log('aaa');

var myApp = angular.module('myApp', []);

myApp.controller('MyController', function($scope){
    $scope.message = "Hello";
    $scope.people = [
        {
            name:"Peter",
            age:20
        },
        {
            name:"Maria",
            age:15
        },
        {
            name:"Jim",
            age: 30
        }
    ];
    
    $scope.name = '';
    
    $scope.addPerson = function (){
    
        var person = {
            name: $scope.name,
            age: $scope.age
        };
        $scope.people.push(person);
    };
    
    $scope.isFilled = function(){
        
        return $scope.name.length > 0 && $scope.age.length > 0;
    
    };
});