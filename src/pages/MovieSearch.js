import React from 'react'
import Navbar from '../components/Navbar'

const MovieSearch = (props) => {
    console.log('props movie search', props);
    return (
        <div>
            <Navbar />
            <h1>HASIL SEARCH</h1>
        </div>
    )
}

export default MovieSearch
