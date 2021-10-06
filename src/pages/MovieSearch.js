import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SearchResults from '../components/SearchResults';

const MovieSearch = (props) => {
    console.log('props movie search :', props.match.params.id);
    const [movies, setMovies] = useState([]);
    const searchTerm = props.match.params.id;
    useEffect(() => {
        console.log('masuk useEfect');
        try {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=3aa675d6d217d61cd95e39d676f3f4cc&language=en-US&query=${props.match.params.id}&page=1&include_adult=false`)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results);
                })
        } catch (error) {
            alert(error)
        }
        console.log(movies);
    }, [searchTerm])

    return (
        <div>
            <Navbar />
            <h1 style={{ color: '#fff', fontSize: '48px', paddingLeft: '80px' }}>Your Results : {props.match.params.id}</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', marginTop: '40px' }}>
                {movies.length > 0 ? movies?.map((movie) =>
                    <SearchResults {...movie} key={movie.id} />
                ) : <p style={{ color: '#fff', fontSize: '28px', paddingLeft: '80px' }}>No results about : {searchTerm}</p>}
            </div>

        </div>
    )
}

export default MovieSearch
