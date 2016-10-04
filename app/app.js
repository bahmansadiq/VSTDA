

var app=angular.module('todoList', []);
app.controller('mainController', ['$scope', function($scope) {

$scope.listAll=[];
$scope.selectedPriority="1";
    $scope.todoButton = function() {

   $scope.listAll.push({
		"taskName" : $scope.addItem,
		"taskPriority": $scope.selectedPriority
	});

    };



}]);



    	/*

    	    $scope.highestPriorityFn = function(decending) {
    	 $scope.result=decending.listAll.taskName;
    	return $scope.result;
    };



    	var priority=$scope.selectedPriority;
    	var displayPriority;

    	if(priority === 1){
    	displayPriority= 'high';
    }
    	else if (priority=== 2) {
    	   displayPriority = 'medium';
   		 }
    	else if (priority === 3) {
    	 	displayPriority =  'low';
    	}

*/
