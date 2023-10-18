import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'

function App() {
  
  const [movieData, setMovieData] = useState([])
  const [searchMovie, setSearchMovie] = useState("")

  const [loading, setLoading] = useState(false);

  const displayMovies = async () =>{
    try {
      setLoading(true);
      const response = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=${YOUR_API_KEY}`)
      const data = await response.json()

      setMovieData(data.Search);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  // useEffect(()=>{
  //   displayMovies();
  // })

  // console.log(movieData);

  return (
    <>
      <Header/>
      <SearchBar setSearchMovie={setSearchMovie} searchMovie={searchMovie} displayMovies={displayMovies} />
      <MovieCard movieData={movieData} loading={loading}/>
    </>
  )
}

export default App
