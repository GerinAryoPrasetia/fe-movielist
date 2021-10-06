import React from 'react'
import GenreMovie from './GenreMovie';

const MovieList = (props) => {
    console.log('MOVIELIST');
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', marginTop: '40px' }}>
            {props.movies.map((movie) =>
                <GenreMovie {...movie} key={movie.id} />
            )}
        </div>
    )
}

export default MovieList
