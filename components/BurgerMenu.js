import Link from "next/link";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = (props) => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <Link href="/most-represented-artists" passHref>
        <a className="bm-item" onClick={closeSideBar}>
          Most represented artists
        </a>
      </Link>
      <Link href="/list-playlists-containing" passHref>
        <a className="bm-item" onClick={closeSideBar}>
          List playlists containing
        </a>
      </Link>
      <Link href="/replace-songs" passHref>
        <a className="bm-item" onClick={closeSideBar}>
          Replace songs
        </a>
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
