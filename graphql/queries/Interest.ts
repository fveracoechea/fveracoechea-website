import { gql } from "@apollo/client";

export default gql`
  query Interest {
    interests {
      data {
        id
        name
        icon
        description
      }
    }
  }
`;