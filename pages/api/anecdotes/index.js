//import dbConnect from "@/middleware/mongoose";
import Anecdote from "@/models/Anecdote";

//dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const anecdotes = await Anecdote.find({});
        res.status(200).json({ success: true, data: anecdotes });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;
    case "POST":
      try {
        const anecdote = await Anecdote.create(req.body);
        res.status(201).json({ success: true, data: anecdote });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
