import React from 'react'
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import MovieWatchList from '../components/MovieWatchList';
import Navbar from '../components/Navbar';


const GetWathcLists = gql`
query MyQuery {
  movie {
    description
    movie_id
    title
    poster_path
  }
}
`;

const DeleteWatchList = gql`
mutation MyMutation2($movie_id: Int!) {
    delete_movie_by_pk(movie_id: $movie_id) {
        movie_id
    }
}
`;

const WatchList = () => {
    const { data } = useQuery(GetWathcLists);
    const [deleteMovie] = useMutation(DeleteWatchList, {
        refetchQueries: [GetWathcLists],
    })
    const onDeleteMovie = (id) => {
        deleteMovie({
            variables: {
                movie_id: id,
            }
        })
    }


    return (
        <div>
            <Navbar />
            <h1 style={{ padding: '50px 50px 0 50px', color: '#fff' }}>My Watch List</h1>
            {data?.movie.map((v, idx) => (
                <MovieWatchList
                    idx={idx}
                    key={v.movie_id}
                    id={v.movie_id}
                    title={v.title}
                    desc={v.description}
                    poster={v.poster_path}
                    onDeleteMovie={() => onDeleteMovie(v.movie_id)}

                />
            ))}

        </div>
    )
}

export default WatchList
