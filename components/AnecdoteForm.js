import React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import AnecdoteContext from "@/context/AnecdoteContext";

const AnecdoteForm = () => {
  const router = useRouter();
  console.log(router, "this is me router");
  const [anecdotes, setAnecdotes] = useContext(AnecdoteContext);

  const addNew = (anecdote) => {
    console.log(anecdote, "me anecdote");
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    const author = event.target.author.value;
    const info = event.target.info.value;
    addNew({
      content,
      author,
      info,
    });
    event.target.content.value = "";
    event.target.author.value = "";
    event.target.info.value = "";
    router.push("/");
  };
  return (
    <div>
      <h2>Create new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Content:{""}
          <input name="content" />
        </div>
        <div>
          Author:{""}
          <input name="author" />
        </div>
        <div>
          Info:{""}
          <input name="info" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
