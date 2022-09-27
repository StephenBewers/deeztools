import { React, forwardRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import BurgerMenu from "./burgerMenu";
import defaultUserImage from "../assets/user.png";
import styles from "../styles/NavBar.module.css";

const NavBar = ({ isSignedIn }) => {
  // Gets the current path name
  const { pathname } = useRouter();

  // On the homepage, "deezTools" should be the H1
  const heading = pathname === "/" ? <h1 className={styles["navBarBrand-homepage"]}>deezTools</h1> : "deezTools";

  // Renders the user menu
  const renderUserMenu = (isSignedIn) => {
    const username = "phen";

    // Custom dropdown toggle for React Bootstrap so we can use the Deezer profile image as dropdown
    const CustomToggle = forwardRef(function CustomToggle(
      { children, onClick },
      ref
    ) {
      return (
        <a
          href=""
          aria-label="User account menu"
          role="button"
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
      );
    });

    // If signed in, show the profile picture with sign out option
    if (isSignedIn) {
      return (
        <Dropdown align="end" className={styles["dropdown"]}>
          <Dropdown.Toggle as={CustomToggle}>
            <Image
              src={defaultUserImage}
              alt={`Username: ${username}`}
              className={styles["dropdown-image"]}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles["dropdown-menu"]}>
            <Dropdown.Header>Username: {username}</Dropdown.Header>
            <Dropdown.Item href="#">Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }

    // If not signed in, show the sign in to Deezer link
    else {
      return (
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/">Sign in</Nav.Link>
          </Nav.Item>
        </Nav>
      );
    }
  };

  return (
    <Navbar
      bg="white"
      className={`px-2 border-bottom border-1 position-fixed vw-100 ${styles.navbar}`}
    >
      <Container fluid>
        <BurgerMenu />
        <Navbar.Brand href="/" className={`${styles.navbarBrand} mx-0 `}>
          {heading}
        </Navbar.Brand>
        {renderUserMenu(isSignedIn)}
      </Container>
    </Navbar>
  );
};

export default NavBar;
