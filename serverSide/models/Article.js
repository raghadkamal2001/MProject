const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    author: { type: String, required: true },
    authorId: { type: String },
    authorDescription: { type: String },
    featuredImage: { type: String },
    category: { type: String, enum: ["صحي", "سياسي", "زراعي"], required: true },
    tags: [String],
    publishedDate: { type: Date, default: Date.now },

    paragraph1: { type: String, required: true },
    paragraph2: { type: String, required: true },
    paragraph3Title: { type: String },
    paragraph3: { type: String },
    paragraph4Title: { type: String },
    paragraph4: { type: String },

    status: {
      type: String,
      enum: ["draft", "published", "pending approval"],
      default: "draft",
    },
    scheduledDate: { type: Date },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
