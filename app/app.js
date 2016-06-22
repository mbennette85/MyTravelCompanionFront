"use strict";
 var tC = angular.module("myTC", ["ngRoute"])
						
tC.config(["$routeProvider",
	function($routeProvider){
		$routeProvider
			.when("/login",{
				templateUrl:"partials/login.html",
				controller:"LoginCtrl"
			})
			.when("/main",{
				templateUrl:"partials/main.html",
				controller:"MainCtrl"
			})
			.when("/select",{
				templateUrl:"partials/select.html",
				controller:"SelectCtrl"
			})
			.when("/",{
				templateUrl:"partials/login.html",
				controller:"LoginCtrl"
			})
	}]);

