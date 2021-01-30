import Head from 'next/head'
import { FC } from 'react';
import { MainSectionQuery, MainSectionDocument } from '../graphql/index';
import MainSection from '../components/MainSection';
import { chain, map, Task } from 'fp-ts/lib/Task';
import { pipe } from 'fp-ts/lib/pipeable';
import AboutSection from '../components/AboutSection';
import { SkillSection } from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';

function fetchQuery<A extends { query: Function }>(apollo: A): Task<{ data: MainSectionQuery, apollo: A }> {
  return async () => {
    const { data } = await apollo.query({
      query: MainSectionDocument
    });
    return { data, apollo };
  }
}

export async function getStaticProps() {
  const { initializeApollo } = await import('../service/ApolloClient$');
  const initApolloTask = () => Promise.resolve(initializeApollo());
  return await pipe(
    initApolloTask,
    chain(fetchQuery),
    map(({ data, apollo }) => ({
      props: {
        initialApolloState: apollo.cache.extract(),
        data,
      },
      revalidate: 10, // 1 sec
    }))
  )();
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
      <ExperienceSection data={data!} />
    </>
  )
}

export default Home;