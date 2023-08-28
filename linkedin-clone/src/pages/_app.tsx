// External Dependencies
import { AppProps } from 'next/app';
import { Helmet } from 'react-helmet';

// Internal Dependencies
import Footer from '../components/Footer';
import Header from '../components/Header';

// Context Providers (uncomment if you use them)
// import { SomeProvider } from '../contexts/SomeContext';

// Global styles (uncomment if you use them)
// import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      {/* SEO and Global Styling */}
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        {/* Add more global meta tags here */}
      </Helmet>

      {/* Global Components */}
      <Header />

      {/* Main Application */}
      {/* Uncomment the following lines if using a global context */}
      {/* <SomeProvider> */}
        <Component {...pageProps} />
      {/* </SomeProvider> */}
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MyApp;