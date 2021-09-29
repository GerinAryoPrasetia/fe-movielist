import React, { useState, useEffect } from 'react'
import './TopCard.css'
import movie1 from '../img/movie1.png'
import movie2 from '../img/movie2.png'
import movie3 from '../img/movie3.png'
import movie4 from '../img/movie4.png'
import Movie from './movie/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=3aa675d6d217d61cd95e39d676f3f4cc&language=en-US&page=1"


const TopCard = () => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        try {
            fetch(FEATURED_API)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results);
                    console.log(data.results);
                });
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <div>
            <div div className="card" >
                {movies.length > 0 && movies.slice(0, 4).map((movie) =>
                    <Movie {...movie} key={movie.id} />
                )}
            </div>
        </div>
    )
}

export default TopCard
    // < div className = "genre-name" >
    //                 <h1>TOP MOVIES  <br />THIS WEEK</h1>
    //                 <p>Most people enjoying the movies</p>
    //                 <button>See All</button>
    //             </ >
    // <div className="movie-list">
    //     <div className="movie-details">
    //         <img src={movie1} alt="" />
    //         <p className="movie-title">{movies[0].title}</p>
    //         <p className="movie-genre">Action</p>
    //     </div>
    //     <div className="movie-details">
    //         <img src={movie2} alt="" />
    //         <p className="movie-title">{movies[1].title}</p>
    //         <p className="movie-genre">Action</p>
    //     </div>
    //     <div className="movie-details">
    //         <img src={movie3} alt="" />
    //         <p className="movie-title">{movies[2].title}</p>
    //         <p className="movie-genre">Action</p>
    //     </div>
    //     <div className="movie-details">
    //         <img src={movie4} alt="" />
    //         <p className="movie-title">{movies[3].title}</p>
    //         <p className="movie-genre">Action</p>
    //     </div>
    // </div>