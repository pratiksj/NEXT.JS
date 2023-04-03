import Navbar from "@/components/Navbar";
import Link from "next/link";
import AnecdoteList from "@/components/AnecdoteList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AnecdoteList />
    </div>
  );
};

export default Home;
