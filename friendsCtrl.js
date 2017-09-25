angular.module('myApp').controller('friendsCtrl', function($scope, friendsService){

    //friends obj save to scope
    $scope.friends = friendsService.friends;
    
    //sort by asc/dsc save to scope 
    $scope.sortByAscDsc = friendsService.sortByAscDsc;
    //sort by asc/dsc selected
    $scope.sortAscDescSelected = $scope.sortByAscDsc[0]; 
    
    //sort by val save to scope
    $scope.sortByValue  = friendsService.sortByValue;
    //sort by val selected
    $scope.sortValueSelected = $scope.sortByValue[0];
    
});