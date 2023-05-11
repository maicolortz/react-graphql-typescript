import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface User {
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

export const getLastFiveteenUsers = async (): Promise<User[]> => {
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

export const getUser = async (id: number): Promise<User> => {
  return client
    .query({
      query: gql`
        query GetUser($id: ID!) {
          user(id: $id) {
            id
            name
            email
            gender
            status
          }
        }
      `,
      variables: {
        id: String(id),
      },
    })
    .then((response) => response.data.user);
};

export const createUser = async (user: User): Promise<User> => {
  const { name, gender, email, status } = user;

  return client
    .mutate({
      mutation: gql`
        mutation (
          $name: String!
          $gender: String!
          $email: String!
          $status: String!
        ) {
          createUser(
            input: {
              name: $name
              gender: $gender
              email: $email
              status: $status
            }
          ) {
            user {
              id
              name
              gender
              email
              status
            }
          }
        }
      `,
      variables: {
        name,
        gender,
        email,
        status,
      },
    })
    .then((response) => response.data.createUser);
};

export const updateUser = async (id: number, user: User): Promise<User> => {
  const { name, gender, email, status } = user;

  return client
    .mutate({
      mutation: gql`
          mutation {
            updateUser(input: {
              id: ${id}
              name: "${name}"
              gender: "${gender}"
              email: "${email}"
              status: "${status}"
            }) {
              user {
                id
                name
                gender
                email
                status
              }
            }
          }
        `,
    })
    .then((response) => response.data.updateUser);
};

export const deleteUser = async (id: number): Promise<User> => {
  const response = await client.mutate({
    mutation: gql`
      mutation DeleteUser($id: Int!) {
        deleteUser(input: { id: $id }) {
          user {
            id
            name
            email
            gender
            status
          }
        }
      }
    `,
    variables: {
      id: id,
    },
    update: (cache) => {
      cache.modify({
        fields: {
          user(existingUser, { DELETE }) {
            return DELETE;
          },
        },
      });
    },
  });

  return response.data.deleteUser.user;
};
