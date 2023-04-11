import React from "react";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import AnecdoteContext from "@/context/AnecdoteContext";
import anecdoteService from "@/services/anecdote";

const AnecdoteForm = () => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");
  const router = useRouter();
  //console.log(router, "this is me router");
  const [anecdotes, setAnecdotes] = useContext(AnecdoteContext);

  const addNew = async (anecdoteObj) => {
    console.log(anecdoteObj, "me anecdote");

    // anecdote.id = Math.round(Math.random() * 10000);
    const addAnecdote = await anecdoteService.create(anecdoteObj);
    console.log(addAnecdote, "i added anecdote");
    setAnecdotes(anecdotes.concat(addAnecdote));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNew({
      author,
      content,
      info,
    });
    setContent("");
    setAuthor("");
    setInfo("");
    router.push("/");
  };
  return (
    <div>
      <h2>Create new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Content:{""}
          <input
            name="content"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </div>
        <div>
          Author:{""}
          <input
            name="author"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </div>
        <div>
          Info:{""}
          <input
            name="info"
            value={info}
            onChange={(event) => {
              setInfo(event.target.value);
            }}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
