import anecdote from "@/pages/anecdotes";
import Link from "next/link";
import AnecdoteContext from "@/context/AnecdoteContext";
import React from "react";
import { useContext, useState } from "react";
import anecdoteService from "@/services/anecdote";

const AnecdoteList = () => {
  const [disPlay, setDisPlay] = useState(null);
  const anecdotes = useContext(AnecdoteContext);

  const increaseLike = async (id) => {
    const updateLike = anecdotes[0].find((blog) => blog.id === id);
    const updatedLike = {
      ...updateLike,
      likes: updateLike.likes + 1,
    };
    const response = await anecdoteService.update(id, updatedLike);
    console.log(response, "i am response");
    anecdotes[1](
      anecdotes[0].map((anecdote) => (anecdote.id === id ? response : anecdote))
    );
  };
  const removeAnecdote = async (id) => {
    const anecdoteToRemove = anecdotes[0].find((blog) => blog.id === id);
    const result = window.confirm(
      `remove the ${anecdoteToRemove.content}by ${anecdoteToRemove.author}`
    );
    if (result) {
      await anecdoteService.remove(id);
      anecdotes[1](anecdotes[0].filter((anecdote) => anecdote.id !== id));
    }
  };

  const showToggle = (index) => {
    if (disPlay === index) {
      setDisPlay(null);
    } else {
      setDisPlay(index);
    }
  };

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
                <div>
                  likes:{anecdote.likes}
                  <button onClick={() => increaseLike(anecdote.id)}>
                    like
                  </button>
                </div>
                <div>
                  <button onClick={() => removeAnecdote(anecdote.id)}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
