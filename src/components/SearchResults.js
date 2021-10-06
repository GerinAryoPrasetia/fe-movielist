import React from 'react'
import { Link } from 'react-router-dom';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const SearchResults = (props) => {
    return (
        <div style={{ width: '100%', marginLeft: '80px' }}>
            <Link to={{
                pathname: `/movie-detail/${props.id}`,
                state: { movies: props },
            }}>
                <div style={{ width: '250px', marginBottom: '30px' }}>
                    <img src={IMG_API + props.poster_path} alt="" style={{ width: '100%' }} />
                    <p style={{ color: '#fff', fontWeight: '600' }}>{props.title}</p>
                </div>
            </Link>

        </div >
    )
}

export default SearchResults
