import { createContext, useState, useEffect } from "react";
import anecdoteService from "@/services/anecdote";

const AnecdoteContext = createContext();

export const AnecdoteContextProvider = (props) => {
  const [anecdotes, setAnecdotes] = useState([]);
  console.log(anecdotes, "anecdotes from server");
  useEffect(() => {
    anecdoteService.getAll().then((anecdote) => setAnecdotes(anecdote.data));
  }, []);

  return (
    <AnecdoteContext.Provider value={[anecdotes, setAnecdotes]}>
      {props.children}
    </AnecdoteContext.Provider>
  );
};

export default AnecdoteContext;
