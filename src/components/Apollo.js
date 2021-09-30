import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://mini-project-alterra.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'bD0Cgq8qpSvryCHwfmb7ZrTMomxi8Oclul44op3ZfPFfAR9BTSo0y5neRzgyZQuf'
    }
});

export default client;