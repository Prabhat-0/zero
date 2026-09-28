import { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ContactUs from "./components/ContactUs";
import MainRoute from "./routes/mainRoute";
import { Route, Routes } from "react-router-dom";
import MovieContainer from "./components/MovieContainer";
import Hero from "./components/Hero";

function App() {
  const [searchInput, setSearchInput] = useState("avengers"); 

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
      <Routes>
		 <Route path="/" element={<MainRoute searchQuery={searchInput} />}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="*" element={<p className="text-white p-10 text-4xl">Page not found</p> } />
      </Routes>
		
		<Footer />
    </div>
  );
}

export default App;