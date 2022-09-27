import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import '../styles/burger-menu.css';
import Head from "next/head";
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }) => {
  const isSignedIn = true;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout isSignedIn={isSignedIn}>
        <Component {...pageProps} isSignedIn={isSignedIn} />
      </Layout>
    </>
  );
};

export default MyApp;
