myApp.factory('CommentFactory', function($http){
  var factory = {};

    factory.getAllComments = function(topic_id, callback){
      $http.get('/comments/'+topic_id).success(function(response){
        callback(response);
      })
    };

    factory.createComment = function(newComment, callback){
      $http.post('/comments', newComment).success(function(response){
        console.log(response);
        callback(response);
      })
    };

  return factory;
})
