myApp.factory('UserFactory', function($http){
  var factory = {};
  factory.currentUser = {loggedIn: false};

  factory.create = function(user_info, callback){
    $http.post('/users', user_info).success(function(response){
      factory.currentUser = response.currentUser;
      callback(response);
    });
  }

  factory.getCurrentUser = function(callback){
    callback(factory.currentUser);
  }

  factory.getUserById = function(id, callback){
    $http.get('/users/'+id).success(function(response){
      callback(response);
    })
  }

  return factory;
})
