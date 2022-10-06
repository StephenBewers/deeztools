import Head from "next/head";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  // Renders a card on the homepage for a particular tool
  const renderToolCard = (title, path, description) => {
    return (
      <Card className={styles["card"]}>
        <Card.Body className="d-flex align-items-start flex-column flex-grow-1">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link href={path}>
            <Button
              variant="outline-primary"
              className={`stretched-link mt-auto align-self-end`}
            >
              Go
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <Head>
        <title>deezTools - Making playlists with Deezer easier</title>
        <meta
          name="description"
          content="A collection of tools to help playlist management and stats with Deezer."
        />
      </Head>

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
    </>
  );
};

Home.layout = "default";

export default Home;
