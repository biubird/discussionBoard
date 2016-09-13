myApp.factory('AnswerFactory', function($http){
  var factory = {};

  factory.getAllAnswers = function(topic_id, callback){
    $http.get('/answers/'+topic_id).success(function(response){
      callback(response);
    })
  };

  factory.createAnswer = function(newAnswer, callback){
    // console.log(answer);
    $http.post('/answers', newAnswer).success(function(response){
      console.log(response);
      callback(response);
    })
  };

  return factory;
})
