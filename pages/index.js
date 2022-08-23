import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>deezTools | Make playlists with Deezer easier</title>
        <meta
          name="description"
          content="A collection of tools to help playlist management with Deezer. Find out which playlists a song is on and bulk replace songs across playlists."
        />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
