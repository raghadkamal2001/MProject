// serverSide/models/Report.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  articleId: { type: Schema.Types.ObjectId, ref: 'Article', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['pending', 'resolved'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
