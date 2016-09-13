var TopicSchema = new mongoose.Schema({
  discussion: {type: String, required: true, minlength: 5},
	description:{type: String},
  category: {type: String, required: true},
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	_answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]

}, {timestamps: true});

mongoose.model('Topic', TopicSchema)
