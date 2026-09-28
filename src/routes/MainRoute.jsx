import React from 'react'
import Hero from '../components/Hero';
import MovieContainer from '../components/MovieContainer';
const MainRoute = ({searchQuery}) => {
  return (
    <>
        <Hero />
		    <MovieContainer searchQuery={searchQuery} />
    </>
  )
}

export default MainRoute;