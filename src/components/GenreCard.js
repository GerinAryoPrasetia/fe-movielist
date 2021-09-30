import React, { useEffect, useState } from 'react'

import './GenreCard.css'
import MovieGenre from './movie/MovieGenre'
import { Link } from 'react-router-dom'

const GENRE_API = "https://api.themoviedb.org/3/discover/movie?api_key=3aa675d6d217d61cd95e39d676f3f4cc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28%2C12&with_watch_monetization_types=flatrate"

const GenreCard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            fetch(GENRE_API)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results);
                    // console.log('GENRE 1', data.results);
                })
        } catch (error) {
            alert(error)
        }

    }, [])

    return (
        <div>
            <div className="card-genre-one">
                <div className="movie-list-one">
                    {movies.slice(0, 4).map((movie) =>
                        <Link to={{
                            pathname: `/movie-detail/${movie.id}`,
                            state: { movies: movie },
                        }}>
                            <MovieGenre {...movie} key={movie.id} />
                        </Link>
                    )}
                </div>
                <div className="genre-name-one">
                    <h1>ACTION & <br /> ADVENTURE</h1>
                    <p>If you ready to prepare you heart to see the action</p>
                    <button>See All</button>
                </div>
            </div>
        </div>
    )
}

export default GenreCard
