var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');

module.exports = (function(){
  return{
    index: function(req, res){

    },
    show: function(req, res){

    },
    create: function(req, res){
      var comment = new Comment (req.body);
      console.log(comment);
      comment.save(function(err){
        if (err){
          console.log(err + "1");
        }else{
          User.findByIdAndUpdate({_id: comment._user}, {$push:{_comments: comment}}, function (err){
            if(err){
              console.log(err + "2");
            }else{
              Topic.findByIdAndUpdate({_id: comment._topic},{$push:{_comments: comment}}, function(err){
                if(err){
                  console.log(err + "3");
                }else{
                  Answer.findByIdAndUpdate({_id: comment._answer},{$push:{_comments: comment}}, function(err){
                    if(err){
                      console.log(err);
                    }else{
                      res.redirect('/answers/'+comment._topic);
                    }
                  })
                }
              })
            }
          })
        }
      })//end of save
    }//end of create
  }//end of return
})();
