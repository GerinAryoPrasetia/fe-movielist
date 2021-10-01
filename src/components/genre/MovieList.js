import React from 'react'
import GenreMovie from './GenreMovie';

const MovieList = (props) => {
    console.log('MOVIELIST');
    return (
        <div>
            {props.movies.map((movie) =>
                <GenreMovie {...movie} />
            )}
        </div>
    )
}

export default MovieList
