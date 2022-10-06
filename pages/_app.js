import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/burger-menu.css";
import Head from "next/head";
import LayoutDefault from "../components/LayoutDefault";
import LayoutSignin from "../components/LayoutSignin";
import SSRProvider from "react-bootstrap/SSRProvider";
import { SessionProvider } from "next-auth/react";

const layouts = {
  default: LayoutDefault,
  signin: LayoutSignin,
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  return (
    <SessionProvider session={session}>
      <SSRProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </SessionProvider>
  );
};

export default MyApp;
