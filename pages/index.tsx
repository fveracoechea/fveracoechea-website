import Head from 'next/head'
import { FC } from 'react';
import { MainSectionQuery, MainSectionDocument } from '../graphql/index';
import MainSection from '../components/MainSection';
import { createApolloClient } from '../utils/apolloClient';
import * as T from 'fp-ts/lib/Task';
import { pipe } from 'fp-ts/lib/pipeable';
import { ApolloClient } from '@apollo/client';

const fetchMainQuery = (apollo: ApolloClient<any>) => () => apollo.query<MainSectionQuery>({
  query: MainSectionDocument
});

export const getServerSideProps = () => pipe(
  T.of(createApolloClient()),
  T.chain(fetchMainQuery),
  T.map(({ data }) => ({
    props: {
      data,
    },
  }))
)()

type Props = {
  data: MainSectionQuery
}

const Home: FC<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charSet="UTF-8"/>
        <title>Francisco Veracoechea - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style global jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      `}</style>
      <MainSection data={data} />
    </>
  )
}

export default Home;