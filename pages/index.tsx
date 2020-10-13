import { gql } from '@apollo/client';
import Head from 'next/head'
import { useInterestQuery } from '../graphql/index';
import { createApolloClient } from '../utils/apolloClient';

export default function Home({ data }) {
  // const { data, loading } = useInterestQuery();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const apollo = createApolloClient();
  const { data } = await apollo.query({
    query: gql`
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
    `
  })
  return {
    props: {
      data,
    },
  }
}
