myApp.controller('UsersController', function($scope, UserFactory, $location){

  $scope.createUser = function(){
    UserFactory.create($scope.newUser, function(response){
        $location.url('/dashboard');
    })
  }


})
