import React, { useState } from 'react'
import styles from '../css/MovieDetail.module.css'
import Poster from '../../img/movie1.png'
import Navbar2 from '../Navbar2';
import Footer from '../footer/Footer'
import { useLocation } from 'react-router';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';

const GetWathcLists = gql`
query MyQuery {
  movie {
    title
    movie_id
    description
  }
}
`;

const InsertWathcList = gql`
mutation MyMutation($movie_id: Int!, $title: String!, $description: String!) {
  insert_movie_one(object: {movie_id: $movie_id, title: $title, description: $description}) {
    title
    movie_id
    description
  }
}
`;



const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const MovieDetail = () => {
    const { state } = useLocation();
    const [watchList, setWatchList] = useState([{}]);
    const { data } = useQuery(GetWathcLists)
    const [insertWatchList] = useMutation(InsertWathcList, {
        refetchQueries: [GetWathcLists],
    })

    const onClickWatchList = () => {
        insertWatchList({
            variables: {
                title: state.movies.title,
                description: state.movies.overview,
                movie_id: state.movies.id,
            }
        })
        console.log("TERKLIK WATCHLIST");
    }
    // console.log('state', state);
    // console.log(state.movies.poster_path);
    // console.log(state.movies);
    return (
        <div className={styles.movieDetail}>
            <Navbar2 />
            <div className={styles.containerDetail}>
                <div className={styles.movieImg}>
                    <img src={IMG_API + state.movies.poster_path} alt="poster" />
                </div>
                <hr />
                <div className={styles.movieContent}>
                    <h1>{state.movies.title}</h1>
                    <p>{state.movies.overview}</p>
                    <button onClick={onClickWatchList}>Add to WatchList</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MovieDetail;
