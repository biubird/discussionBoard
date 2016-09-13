myApp.controller('DashboardsController', function($scope, $location, UserFactory, TopicFactory){

  UserFactory.getCurrentUser(function(response){
    $scope.currentUser = response;
  });

  TopicFactory.getTopics(function(callback){
    $scope.allTopics = callback;
  })

  $scope.createTopic = function(){
    TopicFactory.createTopic({discussion: $scope.newTopic.discussion, description: $scope.newTopic.description, category: $scope.newTopic.category, _user: $scope.currentUser.user_id}, function(callback){
      $scope.allTopics = callback;
      $scope.newTopic.discussion = "";
      $scope.newTopic.description = "";
    })
  }

})
