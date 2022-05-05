const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mvp', {
  useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once('open', () => {
  console.log('mongoose connected successfully');
});

const FavoritedUserSchema = new mongoose.Schema({
  username: {type: String},
  gamesplayed: {type: Number},
  gameswon: {type: Number},
  gametime: {type: Number},
})

const FavoritedUser = mongoose.model('favoritedusers', FavoritedUserSchema);

module.exports = FavoritedUser;