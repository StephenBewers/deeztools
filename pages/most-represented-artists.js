import Head from "next/head";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../styles/MostRepresentedArtists.module.css";

const MostRepresentedArtistsPage = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [showPlaylistOptions, setShowPlaylistOptions] = useState(false);

  const artists = [
    { name: "Taylor Swift", songCount: 32, playlistCount: 10 },
    { name: "The 1975", songCount: 47, playlistCount: 14 },
    { name: "Bastille", songCount: 36, playlistCount: 12 },
    { name: "The National", songCount: 41, playlistCount: 9 },
    { name: "Pale Waves", songCount: 28, playlistCount: 7 },
  ];

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

  const onChange = (event) => {
    // If the user wants to select which playlists to include, show the playlist options to select
    if (event.target.options.selectedIndex === 1) {
      setShowPlaylistOptions(true);
    } else {
      setShowPlaylistOptions(false);
    }
  }

  // Renders the list of playlists to select if the user wants to select which playlists to include
  const renderPlaylistsToSelect = (showPlaylistOptions, playlists) => {
    if (showPlaylistOptions) {
      return (
        <div className="mb-3">
          <p>Select playlists to include:</p>
          <ListGroup className={styles["playlist-selector"]}>
            {playlists.map((playlist, i) => {
              return (
                <label
                  key={i}
                  htmlFor={`checkbox-${i}`}
                  className="list-group-item"
                >
                  <input
                    id={`checkbox-${i}`}
                    className="form-check-input me-2"
                    type="checkbox"
                    value={playlist.title}
                  />
                  {playlist.title}
                </label>
              );
            })}
          </ListGroup>
        </div>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Most represented artists | deezTools</title>
        <meta
          name="description"
          content="Lists the artists with the most songs across your selected Deezer playlists"
        />
      </Head>

      <h1 className="pb-3">Most represented artists</h1>
      <p>
        Choose which playlists you want to see your most represented artists
        for.
      </p>

      <Form className="mb-5">
        <Form.Select aria-label="" className="mb-3" onChange={onChange}>
          <option value="all">All playlists I&apos;ve created</option>
          <option value="selected">Selected playlists only</option>
          <option value="favourites">My favourite tracks</option>
        </Form.Select>

        {renderPlaylistsToSelect(showPlaylistOptions, playlists)}

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>

      <div className="py-4">
        <h2 className="mb-3">Total: {artists.length}</h2>
        <Table striped bordered hover responsive size="sm" className="mb-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Artist</th>
              <th>Playlists</th>
              <th>Songs</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist, i) => {
              return (
                <tr key={i}>
                  <td>1</td>
                  <td>{artist.name}</td>
                  <td>{artist.playlistCount}</td>
                  <td>{artist.songCount}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MostRepresentedArtistsPage;
