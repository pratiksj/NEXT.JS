const mongoose = require("mongoose");
const url = process.env.MONGO_URI;

console.log("connecting to", url);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to the MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB", error.message);
  });

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
  likes: {
    type: String,
    required: true,
  },
});

AnecdoteSchema.set("toJSON", {
  //this is just format
  transform: (document, returnedObject) => {
    //returnedObject ma database bata return vako object hunxa
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

//mongoose.models = {};
module.exports =
  mongoose.models.Anecdote || mongoose.model("Anecdote", AnecdoteSchema);

//export default mongoose.model("Anecdotes", AnecdoteSchema);
//module.exports = mongoose.model("Anecdotes", anecdoteSchema);
