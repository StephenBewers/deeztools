import Link from "next/link";
import React from "react";
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = (props) => {
  return (
    <Menu>
      <Link href="/" passHref>
        <a className="bm-item">List playlists with song</a>
      </Link>
      <Link href="/" passHref>
        <a className="bm-item">Replace song in playlists</a>
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
