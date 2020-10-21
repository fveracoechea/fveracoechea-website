import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import {
  ThemeProvider
} from '@material-ui/core';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import { createApolloClient } from '../utils/apolloClient';
import theme from '../utils/theme';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Navigation>
          <Component {...pageProps} />
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