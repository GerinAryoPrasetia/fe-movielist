import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Pagination from './Pagination'
import MovieList from './MovieList'
const ACTION_API = "https://api.themoviedb.org/3/discover/movie?api_key=3aa675d6d217d61cd95e39d676f3f4cc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate"

const Action = () => {
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        console.log('useEffect');
        try {
            fetch(ACTION_API)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results);
                    setTotalResults(data.total_results)
                    // console.log('GENRE 1', data.results);
                })
        } catch (error) {
            alert(error)
        }
    }, [])


    const nextPage = (pageNumber) => {
        try {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3aa675d6d217d61cd95e39d676f3f4cc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=28&with_watch_monetization_types=flatrate`)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results);
                })
        } catch (error) {
            alert(error)
        }
        console.log('Movies Genre', movies);
    }

    const numberPages = Math.floor(totalResults / 20);
    return (
        <div style={{ padding: '100px' }}>
            <h1 style={{ color: '#fff', fontSize: '48px' }}>ACTION</h1>
            <MovieList movies={movies} />
            {/* {totalResults > 20 ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage} /> : ""} */}
        </div>
    )
}

export default Action
