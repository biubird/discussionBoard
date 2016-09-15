myApp.controller('TopicsController', function($scope, $routeParams, UserFactory, TopicFactory, AnswerFactory, CommentFactory){

  UserFactory.getCurrentUser(function(response){
    $scope.currentUser = response;
  });

  TopicFactory.getTopicById($routeParams.id, function(response){
    $scope.topic = response;
  });

  AnswerFactory.getAllAnswers($routeParams.id, function(response){
    $scope.allAnswers = response;
    console.log($scope.allAnswers);
  });

  $scope.like = function(answerId){
    AnswerFactory.like(answerId, function(response){
      $scope.allAnswers = response;
    })
  };
  $scope.dislike = function(answerId){
    AnswerFactory.dislike(answerId, function(response){
      $scope.allAnswers = response;
    })
  };

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
  };

  $scope.newComment = {}
  $scope.createComment = function(answer, index){
    // console.log($scope.newComment[index]);
    CommentFactory.createComment({
      comment: $scope.newComment[index],
      _answer: answer._id,
      _user: $scope.currentUser.user_id,
      _topic: $routeParams.id
    }, function(callback){
      $scope.allAnswers = callback;
      $scope.comment = "";
    })
  }

})
