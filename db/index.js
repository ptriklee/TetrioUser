const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mvp', {
  useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once('open', () => {
  console.log('mongoose connected successfully');
});

const TrackedUserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  created: {type: Number, required: true},
  gamesplayed: {type: Number, required: true},
  gameswon: {type: Number, required: true},
  gametime: {type: Number, required: true},
  country: {type: String, required: true},
})

const trackedUser = mongoose.model('trackedusers', TrackedUserSchema);