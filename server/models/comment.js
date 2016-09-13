var CommentSchema = new mongoose.Schema({
  comment: {type: String, required: true, minlength: 5},
  _answer: {type: mongoose.Schema.Types.ObjectId, ref: 'answer', required: true},
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	_topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true}
  }, {timestamps: true});

  mongoose.model('Comment', CommentSchema)
