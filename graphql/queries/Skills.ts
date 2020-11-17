import { gql } from "@apollo/client";

export default gql`
  query SkillsSection {
    skills {
      data {
        id
        name
        type
        link
        image {
          full_url
        }
      }
    }
    carousel {
      data {
        id
        title
        description
        image {
          full_url
        }
      }
    }
  }
`;