import { AppProps, Container } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import {
  ThemeProvider
} from '@material-ui/core';
import theme from '../utils/theme';
import useApollo from '../hooks/useApollo';
import Navigation from '../components/Navigation';
import 'pure-react-carousel/dist/react-carousel.es.css';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Navigation>
          <Container>
            <style global jsx>
              {`
                * {
                  padding: 0;
                  margin: 0;
                  box-sizing: border-box;
                }
                html {
                  scroll-behavior: smooth;
                }
                body {
                  background-color: #2b2b2b;
                }
              `}
            </style>
            <Component {...pageProps} />
          </Container>
        </Navigation>
      </ThemeProvider>
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp