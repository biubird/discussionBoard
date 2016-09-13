myApp.controller('TopicsController', function($scope, $routeParams, UserFactory, TopicFactory, AnswerFactory){

  UserFactory.getCurrentUser(function(response){
    $scope.currentUser = response;
  });

  TopicFactory.getTopicById($routeParams.id, function(response){
    $scope.topic = response;
    console.log($scope.topic);
  });

  AnswerFactory.getAllAnswers($routeParams.id, function(response){
    $scope.allAnswers = response;
    console.log($scope.allAnswers);
  });

  $scope.createAnswer = function(){
    AnswerFactory.createAnswer({
      answer: $scope.answer,
      _user: $scope.currentUser.user_id,
      _topic: $routeParams.id,
      likes: 0,
      dislikes: 0
    }, function(callback){
      $scope.allAnswers = callback;
      $scope.answer = "";
    })
  }

})
