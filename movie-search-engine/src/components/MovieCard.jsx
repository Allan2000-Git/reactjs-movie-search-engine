import React from 'react'

const MovieCard = ({movieData, loading}) => {
    return (
        <>   
            {loading ?
                <div className='flex justify-center'>
                    <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
                </div>
            : 
            <div className='px-4 lg:px-10 flex flex-wrap'>
            {
                movieData.map((movie, index)=>{
                    return(
                        <div key={index} className='p-4 lg:w-1/4 w-full parent '>
                            <div className='bg-[#134ba9] p-4 rounded-xl child '>
                                <img className='rounded-xl w-full object-cover' src={movie.Poster} alt="movie poster"/>
                                <h2 className='text-white font-bold text-[1.5rem] mt-4'>Title: {movie.Title}</h2>
                                <h3 className='text-[#fa8804] text-[1rem] mt-4 text-justify'>Released: <span className='text-[1.1rem] font-medium'>{movie.Year}	</span></h3>
                            </div>
                        </div>
                    )
                })
            }
            </div>  
        }
        </>
    )
}

export default MovieCard
