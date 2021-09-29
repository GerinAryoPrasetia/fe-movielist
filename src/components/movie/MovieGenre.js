import React from 'react'
import styles from '../css/Genre.module.css'

const MovieGenre = ({ title, poster_path }) => {

    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    return (

        <div className={styles.movieDetails}>
            <div className={styles.movieHeader}>
                <img className={styles.movieposter} src={IMG_API + poster_path} alt="" />
            </div>
            <div className={styles.movieFooter}>
                <p>{title}</p>
            </div>
        </div>

    )
}

export default MovieGenre
