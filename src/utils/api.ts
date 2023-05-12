import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface User {
  id?: number;
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

export const getLastFifteenUsers = async (): Promise<User[]> => {
  return client
    .query({
      query: gql`
        query GetUsers($first: Int, $after: String) {
          users(first: $first, after: $after) {
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
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
        first: 10,
        after: null,
      },
      fetchPolicy: "no-cache", // Desactivar la caché para obtener datos actualizados
    })
    .then((response) => {
      const endCursor = response.data.users.pageInfo.endCursor;
      const users = response.data.users.nodes;
      console.log(endCursor);

      // Realizar la segunda consulta
      return client
        .query({
          query: gql`
            query GetUsers($first: Int, $after: String) {
              users(first: $first, after: $after) {
                pageInfo {
                  startCursor
                  hasPreviousPage
                }
                nodes {
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
            first: 5,
            after: endCursor, // Utiliza el cursor obtenido en la primera consulta para consultar luego los otros datos
          },
          fetchPolicy: "no-cache",
        })
        .then((secondResponse) => {
          const secondUsers = secondResponse.data.users.nodes;
          console.log(secondUsers);

          // Puedes retornar los usuarios de ambas consultas o realizar cualquier otra manipulación de datos
          return [...users, ...secondUsers];
        });
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

export const createUser = async (
  user: User,
  setMutationAction: (action: string) => void
): Promise<User> => {
  const { name, gender, email, status } = user;

  const response = await client.mutate({
    mutation: gql`
      mutation CreateUser(
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
  });

  setMutationAction("create");

  return response.data.createUser.user;
};

export const updateUser = async (
  id: number,
  user: User,
  setMutationAction: (action: string) => void
): Promise<User> => {
  const { name, gender, email, status } = user;

  const response = await client.mutate({
    mutation: gql`
      mutation UpdateUser(
        $id: Int!
        $name: String!
        $gender: String!
        $email: String!
        $status: String!
      ) {
        updateUser(
          input: {
            id: $id
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
      id,
      name,
      gender,
      email,
      status,
    },
  });

  setMutationAction("update");

  return response.data.updateUser.user;
};

export const deleteUser = async (
  id: number,
  setMutationAction: (action: string) => void
): Promise<User> => {
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
      id,
    },
  });
  setMutationAction("delete");

  return response.data.deleteUser.user;
};
