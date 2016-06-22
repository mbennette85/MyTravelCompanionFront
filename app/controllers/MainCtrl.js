"use strict";
  
tC.controller("MainCtrl",
[
 "$scope",
 "$location",
 "$http",   

 function ($scope, $location, $http) {

   $scope.text = 'Hello, welcome to My Travel Companion. Please sign in or register. ';
  

   // Unauthenticate user when /logout path used
   if ($location.path() === "/logout") {
     ref.unauth();
   }
  }
]);