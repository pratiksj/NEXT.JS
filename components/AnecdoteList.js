import anecdote from "@/pages/anecdotes";
import Link from "next/link";
import AnecdoteContext from "@/context/AnecdoteContext";
import React from "react";
import { useContext, useState } from "react";

const AnecdoteList = () => {
  const [disPlay, setDisPlay] = useState(null);
  const showToggle = (index) => {
    if (disPlay === index) {
      setDisPlay(null);
    } else {
      setDisPlay(index);
    }
  };
  const anecdotes = useContext(AnecdoteContext);

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes[0].map((anecdote, index) => (
          <li key={anecdote.id}>
            <Link href={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link>
            <button onClick={() => showToggle(index)}>
              {disPlay === index ? "Hide" : "View"}
            </button>
            {disPlay === index && (
              <div>
                <div>{anecdote.author}</div>
                <div>{anecdote.info}</div>
                <div>{anecdote.likes}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
