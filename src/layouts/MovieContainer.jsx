import React, { useEffect } from 'react'
import { useState } from 'react';
import MovieSkeleton from '../utils/MovieSkeleton';
import MovieCard from '../components/MovieCard';

const MovieContainer = () => {
    const [movieList,setMovieList]=useState([]);
    const   SEARCH_QUERY='avengers';
    const apiKey = import.meta.env.VITE_API_KEY;
    useEffect(()=>{
        
            const loadMovies=async ()=>{
                try {
                    const movies=await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${SEARCH_QUERY}&type=movie&page=1`)
                    const json=await movies.json();
                    console.log("printing movie_data :---",json);
                    setMovieList([...json.Search]);
                } catch (error) {
                   console.log("printing Error :-- ",error);
                   console.log("Printing error Message :--- ",error.message); 
                }
           
        }
        loadMovies();
        
       
    },[])
  return (
    movieList.length==0?<MovieSkeleton/>:<div className='mt-10'> 
        <h3 className='text-white font-sans text-3xl p-4'> Newly Added Movie List </h3>
        <div id ="movies" className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
       { (movieList.map((item)=>{
            return <MovieCard key ={item.imdbID} item={item}/>
       }))}
    </div>
    </div>
  )
}

export default MovieContainer