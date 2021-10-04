import React from 'react'
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

const WatchList = () => {
    return (
        <div>

        </div>
    )
}

export default WatchList
