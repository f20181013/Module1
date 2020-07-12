(function (){
angular.module("Test1",[])
.controller("MyController", MyController);
MyController.$inject=['$scope'];

function MyController($scope){
	$scope.sufficient="";
	$scope.myVar="";
	$scope.colorText="red";
	$scope.borderStyle="";
	$scope.call = function(){
		check($scope.myVar);
	}
	function check(myString){
		$scope.borderStyle="solid";
		if(myString.length==0){
			$scope.sufficient="Please enter data first";
			$scope.colorText="red";
			return;
		}
		stringArray = myString.split(",");
		var counter = 0;
		for(var i=0;i<stringArray.length;i++){
			if(stringArray[i].trim().length>0) counter++;
		}
		if(counter<=3) $scope.sufficient="Enjoy!";
		else $scope.sufficient="Too much!";
		$scope.colorText="green";
	}
}
})();