import Head from "next/head";
import { useState } from "react";

const ReplaceSongsPage = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
      <Head>
        <title>Replace songs | deezTools</title>
        <meta
          name="description"
          content="Removes specified songs from your Deezer playlists and adds your chosen replacements in their place"
        />
      </Head>

      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <p style={{paddingTop:"4em"}}>Replace songs page</p>
      </div>
    </>
  );
};

ReplaceSongsPage.layout = "default";

export default ReplaceSongsPage;
