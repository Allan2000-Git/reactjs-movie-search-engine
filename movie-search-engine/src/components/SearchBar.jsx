import React from 'react'

const SearchBar = ({setSearchMovie, searchMovie, displayMovies}) => {
  return (
    <>
      <div className="py-8 flex justify-center items-center gap-4">
        <input onChange={(event)=>setSearchMovie(event.target.value)} value={searchMovie} className="text-[1.3rem] font-medium outline-none py-3 px-2 bg-slate-200 rounded-md placeholder:text-[1rem] placeholder:font-normal placeholder:normal-case sm:w-[400px] focus:outline-slate-400 capitalize" autoComplete="false" type="text" name="search" placeholder='Search your movie'/>
        <button onClick={displayMovies} className="bg-[#134ba9] py-3 px-6 rounded-md text-white font-medium text-[1.1rem]" type="submit">Search</button>
      </div>
    </>
  )
}

export default SearchBar
