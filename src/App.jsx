import { useState } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MovieContainer from "./components/MovieContainer";
import NavBar from "./components/NavBar";

function App() {
  const [searchInput, setSearchInput] = useState("avengers"); // default query

  function searchInputSetter(input) {
    const trimmed = input.trim();
    if (trimmed === "") {
      alert("Please enter a value in the search bar");
      return;
    }
    setSearchInput(trimmed);
  }

  return (
    <div className="m-0 p-0 box-border bg-bg w-full min-h-screen">
		<NavBar searchMovie={searchInputSetter} />
		<Hero />
		<MovieContainer searchQuery={searchInput} />
		<Footer />
    </div>
  );
}

export default App;