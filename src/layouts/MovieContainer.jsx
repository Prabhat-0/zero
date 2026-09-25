import React, { useEffect } from 'react'
import { useState } from 'react';

const MovieContainer = () => {
    const {movieList,setMovieList}=useState(null);
    const   SEARCH_QUERY='marvel';
    useEffect(()=>{

        const loadMovies=async ()=>{
            const movies=await fetch(`https://omdbapi.com{API_KEY}&s=${SEARCH_QUERY}&type=movie&page=1`)
        }

    },[])
  return (
    <div>MovieContainer</div>
  )
}

export default MovieContainer