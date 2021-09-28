import React from 'react'
import './TopCard.css'
import movie1 from '../img/movie1.png'
import movie2 from '../img/movie2.png'
import movie3 from '../img/movie3.png'
import movie4 from '../img/movie4.png'

const TopCard = () => {
    return (
        <div>
            <div className="card">
                <div className="genre-name">
                    <h1>TOP MOVIES  <br />THIS WEEK</h1>
                    <p>Most people enjoying the movies</p>
                    <button>See All</button>
                </div>
                <div className="movie-list">
                    <div className="movie-details">
                        <img src={movie1} alt="" />
                        <p className="movie-title">Iron Man (2020)</p>
                        <p className="movie-genre">Action</p>
                    </div>
                    <div className="movie-details">
                        <img src={movie2} alt="" />
                        <p className="movie-title">Iron Man (2020)</p>
                        <p className="movie-genre">Action</p>
                    </div>
                    <div className="movie-details">
                        <img src={movie3} alt="" />
                        <p className="movie-title">Iron Man (2020)</p>
                        <p className="movie-genre">Action</p>
                    </div>
                    <div className="movie-details">
                        <img src={movie4} alt="" />
                        <p className="movie-title">Iron Man (2020)</p>
                        <p className="movie-genre">Action</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopCard
