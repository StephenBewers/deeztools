import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import '../styles/burger-menu.css';
import Head from "next/head";
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
