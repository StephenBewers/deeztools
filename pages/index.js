import Head from "next/head";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = ({ isSignedIn }) => {

  // Renders a card on the homepage for a particular tool
  const renderToolCard = (title, path, description) => {
    return (
      <Card className={styles["card"]}>
        <Card.Body className="d-flex align-items-start flex-column flex-grow-1">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link href={path}>
            <Button
              variant="primary"
              className={`stretched-link mt-auto align-self-end`}
            >
              Go
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  };

  // Renders the homepage, depending on signed in state
  const renderHomepage = (isSignedIn) => {

    // If user is signed in render the homepage cards to the various tools
    if (isSignedIn) {
      return (
        <div className={styles["cards-container"]}>
          {renderToolCard(
            "Most represented artists",
            "/most-represented-artists",
            "Lists the artists with the most songs across your selected playlists."
          )}
          {renderToolCard(
            "List playlists containing",
            "/list-playlists-containing",
            "Lists all of your playlists containing a particular song or artist. Can be limited to return just your own playlists, or added playlists too."
          )}
          {renderToolCard(
            "Replace songs",
            "/replace-songs",
            "Removes specified songs from your playlists and adds your chosen replacements in their place."
          )}
        </div>
      )
    }

    // Otherwise, user is required to sign in so render the sign in button
    else {
      return (
        <div className="d-flex justify-content-center align-items-center">
          Please sign in
        </div>
      )
    }
  }

  return (
    <>
      <Head>
        <title>deezTools - Making playlists with Deezer easier</title>
        <meta
          name="description"
          content="A collection of tools to help playlist management with Deezer. Find out which playlists a song is on and bulk replace songs across playlists."
        />
      </Head>

      {renderHomepage(isSignedIn)}
    </>
  );
};

export default Home;
