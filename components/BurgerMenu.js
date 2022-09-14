import Link from "next/link";
import React from "react";
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = (props) => {
  return (
    <Menu>
      <Link href="/most-represented-artists" passHref>
        <a className="bm-item">Most represented artists</a>
      </Link>
      <Link href="/list-playlists-containing" passHref>
        <a className="bm-item">List playlists containing</a>
      </Link>
      <Link href="/replace-songs" passHref>
        <a className="bm-item">Replace songs</a>
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
