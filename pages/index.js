import Navbar from "@/components/Navbar";
import Link from "next/link";
import AnecdoteContext from "@/context/AnecdoteContext";
import AnecdoteList from "@/components/AnecdoteList";
//import { useContext } from "react";

const Home = () => {
  // const anecdotes = useContext(AnecdoteContext);
  // console.log(anecdotes[0], "this me from home");
  return (
    <div>
      <Navbar />
      <AnecdoteList />
    </div>
  );
};

export default Home;
