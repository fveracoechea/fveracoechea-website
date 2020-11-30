import { gql } from "@apollo/client";

export default gql`
  query ExperienceSection {
    experience {
      data {
        company_name
        company_logo {
          full_url
        }
        position
        description
        website
        working_time
      }
    }
  }
`;