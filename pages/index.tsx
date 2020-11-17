import Head from 'next/head'
import { FC } from 'react';
import { MainSectionQuery, MainSectionDocument, useMainSectionQuery } from '../graphql/index';
import MainSection from '../components/MainSection';
import { createApolloClient } from '../utils/apolloClient';
import * as T from 'fp-ts/lib/Task';
import { pipe } from 'fp-ts/lib/pipeable';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import AboutSection from '../components/AboutSection';
import { SkillSection } from '../components/SkillSection';
import { initializeApollo } from '../service/ApolloClient$';

const fetchMainQuery = (apollo: ApolloClient<NormalizedCacheObject>) => async () => {
  await apollo.query<MainSectionQuery>({
    query: MainSectionDocument
  });
  return apollo;
};

export const getServerSideProps = () => pipe(
  () => Promise.resolve(initializeApollo()),
  T.chain(fetchMainQuery),
  T.map(client => ({
    props: {
      initialApolloState: client.cache.extract(),
    },
  }))
)();

type Props = {
}

const Home: FC<Props> = ({}) => {
  const { data } = useMainSectionQuery();
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charSet="UTF-8"/>
        <title>Francisco Veracoechea - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection data={data!} />
      <AboutSection />
      <SkillSection />
    </>
  )
}

export default Home;