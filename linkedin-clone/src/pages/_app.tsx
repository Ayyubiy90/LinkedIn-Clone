import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import '../styles/styles.css';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Helmet>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
