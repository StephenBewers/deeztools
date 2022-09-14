import Head from "next/head";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
      <Head>
        <title>deezTools - Making playlists with Deezer easier</title>
        <meta
          name="description"
          content="A collection of tools to help playlist management with Deezer. Find out which playlists a song is on and bulk replace songs across playlists."
        />
      </Head>

      <div className={styles["cards-container"]}>
      <Card className={styles["card"]}>
          <Card.Body className="d-flex align-items-start flex-column flex-grow-1">
            <Card.Title>Most represented artists</Card.Title>
            <Card.Text>
              Lists the artists with the most songs across your selected playlists.
            </Card.Text>
            <Link href="/most-represented-artists">
              <Button variant="primary" className={`stretched-link mt-auto align-self-end`}>
                Go
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Body className="d-flex align-items-start flex-column flex-grow-1">
            <Card.Title>List playlists containing</Card.Title>
            <Card.Text>
              Lists all of your playlists containing a particular song or
              artist. Can be limited to return just your own playlists, or added
              playlists too.
            </Card.Text>
            <Link href="/list-playlists-containing">
              <Button variant="primary" className={`stretched-link mt-auto align-self-end`}>
                Go
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Body className="d-flex align-items-start flex-column flex-grow-1">
            <Card.Title>Replace songs</Card.Title>
            <Card.Text>
              Removes specified songs from your playlists and adds
              your chosen replacements in their place.
            </Card.Text>
            <Link href="/replace-songs">
              <Button variant="primary" className={`stretched-link mt-auto align-self-end`}>
                Go
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Home;
