app.controller('introAngularCtrl', function($scope, $timeout){
$scope.shrink ={};
$scope.showPortfolioPicture ={};
$scope.portfolioPictureDexriptionContainer ={
  'display' : 'none',
};
  $timeout(function () {
    $scope.shrink = {
      'opacity' : '0',
    };
  }, 5000);
  $timeout(function () {
    $scope.portfolioPictureDexriptionContainer ={
      'display' : 'block'
    };
  }, 9000);

  $scope.shrinkContainer = {};
  $timeout(function () {

    $scope.shrinkContainer ={
      "margin-top" : "0px"
    };
    $scope.showPortfolio = {
      'opacity' : '1'
    };
    $scope.shrink ={
      "display" : "none"
    };
  }, 9500);
});
