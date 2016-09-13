var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function(){
  return{
    index: function (req, res){
      Topic.find({})
      .populate('_user')
      .exec(function(err, topics){
        if(err){
          console.log(err);
        }else{
          res.json(topics);
        }
      })
    },
    create: function(req, res){
      var topic = new Topic (req.body);
      topic.save(function(err){
        if (err){
          console.log(err);
        }else{
          User.findByIdAndUpdate({_id: topic._user}, {$push:{_topics: topic._id}}, function (err){
            if(err){
              console.log(err);
            }else{
              res.redirect('/topics')
            }
          })
        }
      })
    },
    show: function(req, res){
      Topic.findOne({_id: req.params.id})
        .populate('_user')
        .populate('_answers')
        .exec(function(err, topic){
          // console.log(topic);
          if (err){
            res.json(err);
          }else{
            res.json(topic);
          }
        })
      }
    }

})();
