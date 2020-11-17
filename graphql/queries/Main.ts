import { gql } from "@apollo/client";

export default gql`
  query MainSection {
    main {
      data {
        id
        title
        subtitle
        slogan
        social
        background_image {
          full_url
        }
      }
    }
  }
`;