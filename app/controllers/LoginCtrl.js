"use strict";
  
tC.controller("LoginCtrl",
[
 "$scope",
 "$location",
 "$http",   

 function ($scope, $location, $http) {

   // Local variables
   $scope.text = 'Hello, welcome to My Travel Companion. Please sign in or register. ';

   // $scope.account.email;
   // $scope.account.password;
   // Variables on $scope for use in DOM
   $scope.account = { email: "", password: "" };
   $scope.message = "";

   // Unauthenticate user when /logout path used
   if ($location.path() === "/logout") {
     ref.unauth();
   }

   /*
     Attempt to register a new user account.
     If successful, immediately log user in.
    */
   $scope.register = () => {
     ref.createUser({
       email    : $scope.account.email2,
       password : $scope.account.password2
     }, (error, userData) => {
       if (error) {
         console.log(`Error creating user: ${error}`);
       } else {
         console.log(`Created user account with uid: ${userData.uid}`);
         $scope.login();
       }
     });
   };
   $http({
            method: 'GET',
            url: 'bsjson.html'
   }).then(function successCallback(response) {
  
   // this callback will be called asynchronously
    // when the response is available
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });
   /*
     Attempt to authenticate the user with the
     supplied credentials.
    */
   $scope.login = () => 
     authFactory
       .authenticate($scope.account)
       .then(() => {
         $location.path("/select");
         $scope.$apply();  // Needed for $location.path() to succeed
       });


 }
]);