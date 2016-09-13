var users = require('./../controllers/users.js');
var topics = require('./../controllers/topics.js');
var answers = require('./../controllers/answers.js');
var comments = require('./../controllers/comments.js');

module.exports = function(app){
  // <!--Users-->
  app.get('/users', users.index);
  app.post('/users', users.create);
  app.get('/users/:id', users.show);

  // <!--Topics-->
  app.get('/topics', topics.index);
  app.post('/topics', topics.create);
  app.get('/topics/:id', topics.show);

  // <!--Answers-->
  app.get('/answers', answers.index);
  app.get('/answers/:id', answers.show);
  app.post('/answers', answers.create);
  app.post('/answers/like/:id', answers.like);

  // <!--Comments-->
  app.get('/comments', comments.index);
  app.get('/comments/:id', comments.show);
  app.post('/comments', comments.create);
}
