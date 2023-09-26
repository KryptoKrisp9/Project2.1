const Todo = require('../models/Todo'); // Adjust the path to match your file structure


const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Todo", TodoSchema);