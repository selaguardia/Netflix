const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: Boolean },
    trailer: { type: Boolean },
    video: { type: Boolean },
    year: { type: Number },
    limit: { type: Number },
    genre: { type: String },
    isTvShow: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
