// serverSide/models/Comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  articleId: { type: Schema.Types.ObjectId, ref: 'Article', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['approved', 'pending', 'rejected'], default: 'pending' }
});

module.exports = mongoose.model('Comment', commentSchema);
