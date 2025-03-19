// serverSide/models/Analytics.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const analyticsSchema = new Schema({
  articleId: { type: Schema.Types.ObjectId, ref: 'Article', required: true },
  views: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
  trendingStatus: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Analytics', analyticsSchema);
