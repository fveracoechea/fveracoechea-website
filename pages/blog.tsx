import Head from 'next/head';
import { FC } from 'react';
import ComingSoon from '../components/MainSection/ComingSoon';
import data from '../data/homepage';

const Home: FC<{}> = () => {
	const title = data.main.title;
	const subtitle = data.main.subtitle;
	const slogan = data.main.slogan;
	const image = data.main.background_image;

	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />
				<title>{title}</title>
				<meta name="description" content={`${subtitle} - ${slogan}`} />
				<meta name="robots" content="index, follow" />

				<meta property="og:title" content={`${title} - ${subtitle}`} />
				<meta property="og:url" content="https://fveracoechea.com" />
				<meta property="og:image" content={image!} />
				<meta property="og:type" content="website" />
				<meta property="og:description" content={slogan} />
				<meta name="twitter:card" content="summary_large_image" />

				<link rel="canonical" href="https://fveracoechea.com" />

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ComingSoon />
		</>
	);
};

export default Home;
