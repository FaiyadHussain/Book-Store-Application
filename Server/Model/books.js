const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true, // Creating index on 'title' field
    },
    author: {
      type: String,
      required: true,
      index: true, // Creating index on 'author' field
    },
    price: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Adding compound index on 'title' and 'author' fields
bookSchema.index({ title: 1, author: 1 });

module.exports = mongoose.model("books", bookSchema);
