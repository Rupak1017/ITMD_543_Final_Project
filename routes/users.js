const mongoose = require('mongoose');
const plm=require('passport-local-mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/FinalProject");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  dp: {
    type: String, // Assuming you store the path or URL of the user's profile picture
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  fullname: {
    type: String,

    trim: true,
  },
});

userSchema.plugin(plm);
module.exports= mongoose.model('User', userSchema);


