import Head from "next/head";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/ListPlaylists.module.css";

const ListPlaylistsContainingPage = () => {
  const [signedIn, setSignedIn] = useState(false);

  const user = { id: 2 };

  const playlists = [
    {
      title: "00s Rock",
      link: "https://www.deezer.com/en/playlist/1419215845",
      creator: "1",
    },
    {
      title: "2022: My Number 1s",
      link: "https://www.deezer.com/en/playlist/9997283342",
      creator: "2",
    },
    {
      title: "Annuals",
      link: "https://www.deezer.com/en/playlist/3323338742",
      creator: "2",
    },
    {
      title: "Brand New UK",
      link: "https://www.deezer.com/en/playlist/63141574",
      creator: "1",
    },
    {
      title: "Dance Anthems",
      link: "https://www.deezer.com/en/playlist/4503899902",
      creator: "1",
    },
    {
      title: "Deezer Hits UK",
      link: "https://www.deezer.com/en/playlist/915487765",
      creator: "1",
    },
    {
      title: "Everything Indie UK",
      link: "https://www.deezer.com/en/playlist/762567663",
      creator: "1",
    },
    {
      title: "Indie Stereo",
      link: "https://www.deezer.com/en/playlist/4662919204",
      creator: "1",
    },
    {
      title: "Rock Kills Kid - Are You Nervous?",
      link: "https://www.deezer.com/en/playlist/9241870682",
      creator: "2",
    },
    {
      title: "The Dykeenies - Nothing Means Everything",
      link: "https://www.deezer.com/en/playlist/1453741785",
      creator: "2",
    },
    {
      title: "Wedding Playlist",
      link: "https://www.deezer.com/en/playlist/9550372222",
      creator: "2",
    },
  ];

  return (
    <>
      <Head>
        <title>List playlists containing | deezTools</title>
        <meta
          name="description"
          content="Lists all of your Deezer playlists containing a particular song or artist"
        />
      </Head>
      <h1 className="pb-3">List playlists containing</h1>
      <p>Enter the artist name, or ID, to see all playlists containing that artist.</p>
      <p>Enter the artist name and song name, or just the song ID, to see all playlists containing that song.</p>
      <p>By default this tool will only list your own playlists. Use the toggle switch to include added playlists as well.</p>
      <Form className="my-5">
        <fieldset className="mb-3">
          <legend>Artist</legend>
          <Row>
            <Col md={10} className="mb-2">
              <Form.Group controlId="artist-name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Form.Group as={Col} controlId="artist-id">
              <Form.Label>ID</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>
        </fieldset>

        <fieldset className="mb-3">
          <legend>Song</legend>
          <Row>
            <Col md={10} className="mb-2">
              <Form.Group controlId="song-title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Form.Group as={Col} controlId="song-id">
              <Form.Label>ID</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>
        </fieldset>

        <Form.Check
          className="py-2"
          type="switch"
          id="include-added-playlists"
          label="Include added playlists"
        />

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>

      <div className="py-4">
      <h2 className="mb-3">Total: {playlists.length}</h2>
      <ListGroup className="mb-4">
        {playlists.map((playlist, i) => {
          return (
            <ListGroup.Item key={i} action href={playlist.link} target="_blank">
              {playlist.title}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      </div>
    </>
  );
};

export default ListPlaylistsContainingPage;
