import Head from 'next/head'
import { FC } from 'react';
import { MainSectionQuery, MainSectionDocument } from '../graphql/index';
import MainSection from '../components/MainSection';
import * as T from 'fp-ts/lib/Task';
import { pipe } from 'fp-ts/lib/pipeable';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import AboutSection from '../components/AboutSection';
import { SkillSection } from '../components/SkillSection';
import { initializeApollo } from '../service/ApolloClient$';
import ExperienceSection from '../components/ExperienceSection';

const fetchMainQuery = (apollo: ApolloClient<NormalizedCacheObject>): T.Task<{
  data: MainSectionQuery, apollo: ApolloClient<NormalizedCacheObject>
}> => async () => {
  const { data } = await apollo.query<MainSectionQuery>({
    query: MainSectionDocument
  });
  return { data, apollo };
};

const initApolloTask: T.Task<ApolloClient<NormalizedCacheObject>> = () => Promise.resolve(initializeApollo());

export async function getServerSideProps() {
  const computations = await pipe(
    initApolloTask,
    T.chain(fetchMainQuery),
    T.map(({ data, apollo }) => ({
      props: {
        initialApolloState: apollo.cache.extract(),
        data
      },
    }))
  )();
  return computations;
};

type Props = {
  data: MainSectionQuery
}

const Home: FC<Props> = ({ data }) => {
  const title = data?.main?.data![0]?.title;
  const subtitle = data?.main?.data![0]?.subtitle;
  const slogan = data?.main?.data![0]?.slogan;
  const image = data?.main?.data![0]?.background_image?.full_url;
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charSet="UTF-8"/>
        <title>{title}</title>
        <meta name="description" content={`${subtitle} - ${slogan}`} />
        <meta name="robots" content= "index, follow" />

        <meta property="og:title" content={`${title} - ${subtitle}`} />
        <meta property="og:url" content="https://fveracoechea.com" />
        <meta property="og:image" content={image!} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={slogan} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://fveracoechea.com" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection data={data!} />
      <AboutSection data={data!} />
      <SkillSection data={data!} />
      <ExperienceSection />
    </>
  )
}

export default Home;