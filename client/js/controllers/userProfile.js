myApp.controller('UserProfileController', function($scope, $routeParams, UserFactory){

  UserFactory.getUserById($routeParams.id, function(response){
    $scope.user = response;
  })
})
