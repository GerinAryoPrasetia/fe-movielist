import React from 'react'
import styles from '../css/GenreMovie.module.css'
import { Link } from 'react-router-dom'

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const GenreMovie = (props) => {
    return (
        <div style={{ width: '100%', marginLeft: '80px' }}>
            <Link to={{
                pathname: `/movie-detail/${props.id}`,
                state: { movies: props },
            }}>
                <div style={{ width: '70%' }}>
                    <img src={IMG_API + props.poster_path} alt="" style={{ width: '100%' }} />
                    <p>{props.title}</p>
                </div>
            </Link>

        </div >
    )
}

export default GenreMovie
