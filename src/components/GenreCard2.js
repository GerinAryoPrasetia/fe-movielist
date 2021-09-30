import React, { useState, useEffect } from 'react'
import MovieGenre from './movie/MovieGenre';
import styles from './css/Genre.module.css'
import { Link } from 'react-router-dom';

const GENRE_API_2 = "https://api.themoviedb.org/3/discover/movie?api_key=3aa675d6d217d61cd95e39d676f3f4cc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate"


const GenreCard2 = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            fetch(GENRE_API_2)
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
            <div className={styles.cardGenreOne}>
                <div className={styles.genreNameOne}>
                    <h1>DRAMA</h1>
                    <p>People will always cry watching drama</p>
                    <button>See All</button>
                </div>
                {movies.slice(0, 4).map((movie) =>
                    <Link to={{
                        pathname: `/movie-detail/${movie.id}`,
                        state: { movies: movie },
                    }}>
                        <MovieGenre {...movie} key={movie.id} />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default GenreCard2
