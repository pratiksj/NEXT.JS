import Navbar from "@/components/Navbar";
import Link from "next/link";
import AnecdoteList from "@/components/AnecdoteList";
import AnecdoteForm from "@/components/AnecdoteForm";
import { useState } from "react";

const Home = () => {
  // const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  // const vote = (id) => {
  //   const anecdote = anecdoteById(id);

  //   const voted = {
  //     ...anecdote,
  //     votes: anecdote.votes + 1,
  //   };

  //   setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  // };

  return (
    <div>
      <Navbar />
      <AnecdoteList />
    </div>
  );
};

export default Home;
