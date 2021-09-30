import React from 'react'
import './Movie.css'

const Movie = ({ title, poster_path, overview }) => {
    // console.log('component masuk');
    // console.log('component', title);
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className="movie">
            <div className="movie-details" style={{ width: '160px' }}>
                <div className="movie-header">
                    <img style={{ width: '100%' }} src={IMG_API + poster_path} alt="" />
                </div>
                <div className="movie-footer">
                    <p style={{ color: '#000' }}>{title}</p>
                </div>
            </div>
        </div>
    )
}


export default Movie

