import React from "react";
import { useContext } from "react";
import AnecdoteContext from "@/context/AnecdoteContext";

const AnecdoteForm = () => {
  const [anecdotes, setAnecdotes] = useContext(AnecdoteContext);

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    addNew({ content, id: content.id });
    event.target.anecdote.value = "";
  };
  return (
    <div>
      <h2>Create new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
