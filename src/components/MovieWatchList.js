import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../components/css/MovieWatchList.module.css'

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const MovieWatchList = (props) => {
    console.log(props);
    return (
        <div className={styles.watchlist}>
            <div className={styles.watchlistCard}>
                <p className={styles.number}>{props.idx + 1}</p>
                <img src={IMG_API + props.poster} alt="poster" />
                <div className={styles.movieContent}>
                    <h1 style={{ marginBottom: '10px' }}>{props.title}</h1>
                    <p style={{ marginBottom: '30px' }}>{props.desc}</p>
                    <div className={styles.buttonContainer}>
                        {/* <Link to={{
                            pathname: `/movie-detail/${props.id}`,
                            state: { movies: props },
                        }}>
                            <button className={styles.listBtnPrimary}>See Details</button>
                        </Link> */}

                        <button className={styles.listBtnSecondary} onClick={props.onDeleteMovie}>Remove</button>
                    </div>
                </div>

            </div>
            <hr style={{ margin: '0 50px' }} />
        </div>
    )
}

export default MovieWatchList
