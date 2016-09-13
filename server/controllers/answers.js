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
          .exec(function(err, answers){
            if(err){
              console.log(err);
            }else{
              res.json(answers);
            }
          })
    },//show fx close
    like: function(req, res){

    }//close of like fx


  }//return close
})();
