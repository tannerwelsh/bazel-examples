import '../styles/globals.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';

console.log(Amplify);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
