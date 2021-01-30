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
        resume {
          full_url
        }
        background_image {
          full_url
        }
      }
    }
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
    experience {
      data {
        id
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