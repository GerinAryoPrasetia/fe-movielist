import React, { useEffect, useState } from 'react'
import MovieList from './MovieList';

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=3aa675d6d217d61cd95e39d676f3f4cc&language=en-US&page=1"

const TopMovies = () => {
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
        <div style={{ padding: '100px' }}>
            <h1 style={{ color: '#fff', fontSize: '48px' }}>TOP MOVIES THIS WEEK</h1>
            <MovieList movies={movies} />
        </div>
    )
}

export default TopMovies
