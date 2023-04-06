const mongoose = require("mongoose");

const AnecdoteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});

//mongoose.models = {};
module.exports =
  mongoose.models.Anecdote || mongoose.model("Anecdote", AnecdoteSchema);

//export default mongoose.model("Anecdotes", AnecdoteSchema);
//module.exports = mongoose.model("Anecdotes", anecdoteSchema);
