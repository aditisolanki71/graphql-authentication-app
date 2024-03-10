import gql from "graphql-tag";
// export default gql`
// {
//     user {
//       id
//       email
//     }
//   }
// `;
export default gql`
  query GetCurrentUser {
    user {
      id
      email
    }
  }
`;