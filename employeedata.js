var app = angular.module('myApp', []);
app.controller('employeesCtrl', function($scope, $http) {
    $http.get("package.json").then(function(response) {
        $scope.myData = response.data.employee;
		
    });
	
});
