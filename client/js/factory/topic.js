myApp.factory('TopicFactory', function($http){
  var factory = {};

  factory.getTopics = function(callback){
    $http.get('/topics').success(function(response){
      callback(response);
    });
  };

  factory.getTopicById = function(id, callback){
    $http.get('/topics/'+id).success(function(response){
      callback(response);
    });
  };

  factory.createTopic = function(newTopic, callback){
    $http.post('/topics', newTopic).success(function(response){
      callback(response);
    });
  }

  return factory;
})
