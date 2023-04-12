import Anecdote from "@/models/Anecdote";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const anecdote = await Anecdote.findById(id);
        if (!anecdote) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(anecdote);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        // const { id } = req.query;
        // const { author, content, info, likes } = req.body;
        // const updatedObj = {
        //   author,
        //   content,
        //   info,
        //   likes,
        // };
        //const anecdote = await Anecdote.findById(req.params.id)
        const updatedAnecdote = await Anecdote.findByIdAndUpdate(id, req.body, {
          new: true,
          //runValidators: true,
        });
        if (!updatedAnecdote) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(updatedAnecdote);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
