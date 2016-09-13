var User = mongoose.model('User');
var currentUser = {loggedIn: false};

module.exports = (function(){

  return{
    index: function (req, res){

    },
    create: function(req, res){
      var user = new User(req.body);
      user.save(function(err){
        if(err){
          console.log(err);
        }else{
          currentUser = {
            loggedIn: true,
            user_id: user._id,
            name: user.name
          }
          res.json({currentUser: currentUser});
        }
      })
    },
    show: function(req, res){
      User.findOne({_id: req.params.id})
          .populate('_topics')
          .populate('_answers')
          .exec(function(err, user){
            if (err){
              res.json(err);
            }else{
              res.json(user)
            }
          })
    }//end of show

  }//close of return

})();
