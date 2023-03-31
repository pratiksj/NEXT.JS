import anecdote from "@/pages/anecdotes";
import Link from "next/link";
import AnecdoteContext from "@/context/AnecdoteContext";
import React from "react";
import { useContext } from "react";
const AnecdoteList = () => {
  const anecdotes = useContext(AnecdoteContext);

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes[0].map((anecdote) => (
          <li key={anecdote.id}>{anecdote.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
