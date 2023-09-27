const mongoose = require("mongoose");
// In index.js or another file
const todo = require('./ToDo.js');


const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Todo", TodoSchema);
