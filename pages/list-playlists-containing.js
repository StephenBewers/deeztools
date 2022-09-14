import Head from "next/head";
import { useState } from "react";

const ListPlaylistsContainingPage = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
      <Head>
        <title>List playlists containing | deezTools</title>
        <meta
          name="description"
          content="Lists all of your Deezer playlists containing a particular song or artist"
        />
      </Head>

      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <p style={{paddingTop:"4em"}}>List playlists containing page</p>
      </div>
    </>
  );
};

export default ListPlaylistsContainingPage;
