myApp.factory('AnswerFactory', function($http){
  var factory = {};

  factory.getAllAnswers = function(topic_id, callback){
    $http.get('/answers/'+topic_id).success(function(response){
      callback(response);
    })
  };

  factory.createAnswer = function(newAnswer, callback){
    $http.post('/answers', newAnswer).success(function(response){
      callback(response);
    })
  };

  factory.like = function(answerId, callback){
    $http.get('/answers/like/'+answerId).success(function(response){
      callback(response);
    })
  };
  factory.dislike = function(answerId, callback){
    $http.get('/answers/dislike/'+answerId).success(function(response){
      callback(response);
    })
  };

  return factory;
})
