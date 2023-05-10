import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

const client = new ApolloClient({
  uri: "https://gorest.co.in/public/v2/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer f1a8eafd8fb2701a565774f268418ae09aa4f311d554f4613fbff1a29a2bfa7f`,
  },
});

export const getLastFiveteenUsers = (): Promise<User[]> => {
  return client
    .query({
      query: gql`
        query {
          users(last: 15) {
            edges {
              cursor
              node {
                id
                name
                email
                gender
                status
              }
            }
          }
        }
      `,
    })
    .then((response) => {
      const edges = response.data.users.edges;
      const users = edges.map((edge: any) => edge.node);
      return users;
    });
};

export const getUser = (id: number): Promise<User> => {
  return client
    .query({
      query: gql`
        query {
          user(id: 925) {
            id
            name
            email
            gender
            status
          }
        }
      `,
      variables: {
        id: id,
      },
    })
    .then((response) => response.data.user);
};
