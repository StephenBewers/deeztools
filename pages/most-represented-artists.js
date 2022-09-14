import Head from "next/head";
import { useState } from "react";

const MostRepresentedArtistsPage = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
      <Head>
        <title>Most represented artists | deezTools</title>
        <meta
          name="description"
          content="Lists the artists with the most songs across your selected Deezer playlists"
        />
      </Head>

      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <p style={{paddingTop:"4em"}}>Most represented artists page</p>
      </div>
    </>
  );
};

export default MostRepresentedArtistsPage;
