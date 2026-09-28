import React, { useEffect, useState } from "react";
import MovieSkeleton from "../utils/MovieSkeleton";
import MovieCard from "./MovieCard";

const MovieContainer = ({ searchQuery }) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const controller = new AbortController();

    const loadMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}&type=movie&page=1`
        );
        const json = await res.json();

        if (json.Response === "False") {
          setMovieList([]);
          setError(json.Error || "No movies found");
        } else {
          setMovieList(json.Search);
        }
        setLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } 
    };

    loadMovies();

    // cancels the old request if the query changes quickly (prevents stale results)
    return () => controller.abort();
  }, [searchQuery, apiKey]);

  if (loading) return <MovieSkeleton />;

  if (error) {
    return (
      <p className="text-white font-sans text-xl p-4 mt-10">
        {error} for "{searchQuery}"
      </p>
    );
  }

  return (
    <div className="m-0">
      <h3 className="text-white font-sans text-3xl p-4 m-auto">
        Results for "{searchQuery}"
      </h3>
      <div
        id="movies"
        className="mt-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        {movieList.map((item) => (
          <MovieCard key={item.imdbID} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;