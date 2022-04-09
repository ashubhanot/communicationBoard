const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postReplySchema = new Schema({
    postReplies: String,
  }, {
    timestamps: true
  });

const postSchema = new Schema({
    userPost: String,
    postReply: [postReplySchema],
    created: { type: Date, default: Date.now }
  }, {
    timestamps: true
  });

const userSchema = new Schema({
    name: {type: String, required: true, unique: true},
    email: String,
    googleId: String,
    posts: [postSchema]
  }, {
    timestamps: true
  });
  
  
  module.exports = mongoose.model('User', userSchema);