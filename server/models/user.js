var UserSchema = new mongoose.Schema({
  name: {type: String, required: true, mimlength: 2},
  _topics: [{type: mongoose.Schema.Types.ObjectId, reference: 'Topic'}],
  _answers: [{type: mongoose.Schema.Types.ObjectId, reference: 'Answer'}],
}, {timestamps: true});

mongoose.model('User', UserSchema)
