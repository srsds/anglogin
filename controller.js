var app= angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
	templateUrl:'login.html'
	})
	.when('/admin',
	{
	resolve:
	{
		"check": function($location,$rootScope){
			if(!$rootScope.loggedIn)
			{
				$location.path('/');
			}
		}
	},
		templateUrl:'dashboard.html'

	})
	.otherwise({
	 redirectTo: '/'
	 });
});

app.controller('loginCtrl',function($scope,$location,$rootScope){
 	$scope.submit= function(){
 		
 		if($scope.uname=='root'&& $scope.pass=='root'){
 			$rootScope.loggedIn = true;
 			$location.path('/admin');
 		}
 		else
 		{
 			alert('Wrong Stuff');
 		}
 		};
 	});
