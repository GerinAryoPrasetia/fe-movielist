import React from 'react'
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import MovieWatchList from '../components/MovieWatchList';


const GetWathcLists = gql`
query MyQuery {
  movie {
    title
    movie_id
    description
  }
}
`;

const WatchList = () => {
    const { data } = useQuery(GetWathcLists);
    return (
        <div>
            {data?.movie.map((v) => (
                <div>
                    <h1>{v.title}</h1>
                    <p>{v.description}</p>
                </div>
            ))}

        </div>
    )
}

export default WatchList
