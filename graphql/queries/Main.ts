import { gql } from "@apollo/client";

export default gql`
  query MainSection {
    main {
      data {
        id
        title
        subtitle
        background_image {
          full_url
        }
      }
    }
  }
`;