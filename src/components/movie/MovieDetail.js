import React from 'react'
import styles from '../css/MovieDetail.module.css'
import Poster from '../../img/movie1.png'
import Navbar2 from '../Navbar2';
import Footer from '../footer/Footer'
import { useLocation } from 'react-router';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const MovieDetail = () => {
    const { state } = useLocation();
    console.log('state', state);
    console.log(state.movies.poster_path);
    console.log(state.movies);
    return (
        <div className={styles.movieDetail}>
            <Navbar2 />
            <div className={styles.containerDetail}>
                <div className={styles.movieImg}>
                    <img src={IMG_API + state.movies.poster_path} alt="poster" />
                </div>
                <hr />
                <div className={styles.movieContent}>
                    <h1>{state.movies.title}</h1>
                    <p>{state.movies.overview}</p>
                    <button>Add to WatchList</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MovieDetail;
