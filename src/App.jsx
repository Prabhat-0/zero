import Hero from "./components/Hero"
import Footer from "./layouts/Footer"
import MovieContainer from "./layouts/MovieContainer"
import NavBar from "./layouts/NavBar"



function App() {
 
  return (
    <div className="m-0 p-0 box-border bg-bg w-full min-h-screen">
      <NavBar/>
      <Hero/>
      <MovieContainer/>
      <Footer/>
    </div>
  )
}

export default App
