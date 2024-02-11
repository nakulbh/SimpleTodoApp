const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  compelted: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
