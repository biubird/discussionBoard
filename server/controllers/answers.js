var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function(){
  return{
    index: function (req, res){

    },
    create: function(req, res){
      var answer = new Answer (req.body);
      answer.save(function(err){
        if (err){
          console.log(err + "1");
        }else{
          User.findByIdAndUpdate({_id: answer._user}, {$push:{_answers: answer}}, function (err){
            if(err){
              console.log(err + "2");
            }else{
              Topic.findByIdAndUpdate({_id: answer._topic},{$push:{_answers: answer}}, function(err){
                if(err){
                  console.log(err + "3");
                }else{
                  res.redirect('/answers/'+answer._topic)
                }
              })
            }
          })
        }
      })
    },
    show: function(req, res){
      // console.log(req.params);
      Answer.find({_topic: req.params.id})
          .populate('_user')
          .populate('_comments')
          .exec(function(err, almostanswers){
            if(err){
              console.log(err);
            }else{
              User.populate(almostanswers, {path: '_comments._user', model: 'User'}, function(err, answers){
                if (err){
                  console.log(err);
                }else{
                  res.json(answers);
                }
              })
            }
          })
    },//show fx close
    like: function(req, res){
      Answer.findOne({_id: req.params.id}, function(err, answer){
        if (err){
          console.log(err);
        }else{
          likes = answer.likes += 1;
          Answer.findByIdAndUpdate(req.params.id, {$set: {likes: likes}}, function(err){
            if (err){
              console.log(err);
            }else{
              res.redirect('/answers/'+answer._topic);
            }
          })
        }
      })

    },//close of like fx
    dislike: function(req, res){
      Answer.findOne({_id: req.params.id}, function(err, answer){
        if (err){
          console.log(err);
        }else{
          dislikes = answer.dislikes += 1;
          Answer.findByIdAndUpdate(req.params.id, {$set: {dislikes: dislikes}}, function(err){
            if (err){
              console.log(err);
            }else{
              res.redirect('/answers/'+answer._topic);
            }
          })
        }
      })
    }//close of dislike fx


  }//return close
})();
