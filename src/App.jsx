import Hero from "./components/Hero"
import MovieContainer from "./layouts/MovieContainer"
import NavBar from "./layouts/NavBar"



function App() {
 
  return (
    <div className="m-0 p-0 box-border bg-bg w-full min-h-screen">
      <NavBar/>
      <Hero/>
      <MovieContainer/>
    </div>
  )
}

export default App
