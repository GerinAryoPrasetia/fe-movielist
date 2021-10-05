import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const MovieSearch = (props) => {
    console.log('props movie search', props.match.params.id);
    return (
        <div>
            <Navbar />
            <h1>HASIL SEARCH</h1>
        </div>
    )
}

export default MovieSearch
