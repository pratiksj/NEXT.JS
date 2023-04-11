import anecdote from "@/pages/anecdotes";
import Link from "next/link";
import AnecdoteContext from "@/context/AnecdoteContext";
import React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";

const AnecdoteList = () => {
  const anecdotes = useContext(AnecdoteContext);
  //console.log(anecdotes[0], "i am coming from context");
  const router = useRouter();

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes[0].map((anecdote) => (
          <li key={anecdote._id}>
            <Link href={`/anecdote/${anecdote._id}`}>{anecdote.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
