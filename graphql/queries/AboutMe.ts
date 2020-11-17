import { gql } from "@apollo/client";

export default gql`
  query AboutMe {
    about_me {
      data {
        id
        full_name
        quote
        picture {
          full_url
        }
        descriptions
      }
    }
    contact {
      data {
        id
        icon
        info
      }
    }
    interests {
      data {
        id
        name
        icon
        description
      }
    },
    information {
      data {
        id
        icon
        text
      }
    }
  }
`;