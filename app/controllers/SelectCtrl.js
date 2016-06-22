
"use strict";
  
tC.controller("SelectCtrl",
[
 "$scope",
 "$location",
 "$http",

 function ($scope, $location, $http) {
     $scope.text= "What location are we exploring today?";

     $scope.select= () =>
         $location.path("/main");



     // ngModule.controller(function($http){
     //    var self = this;
     //    $http.get('/api/json').success(function(users){
     //      this.entries = users;
     //    });
     // });
 }    
 ]);