var AnswerSchema = new mongoose.Schema({
  answer: {type: String, required: true, minlength: 5},
  _comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	_topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true},
	likes: {type: Number, required: true},
  dislikes: {type: Number, required: true}

}, {timestamps: true});

mongoose.model('Answer', AnswerSchema)
