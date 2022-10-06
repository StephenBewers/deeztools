import { React, forwardRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Popup from "../components/Popup";
import { useRouter } from "next/router";
import Image from "next/image";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import BurgerMenu from "./burgerMenu";
import defaultUserImage from "../assets/user.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {

  const { data: session, status } = useSession();

  // Gets the current path name
  const { pathname } = useRouter();

  // On the homepage, "deezTools" should be the H1
  const heading = pathname === "/" ? <h1 className={styles["navBarBrand-homepage"]}>deezTools</h1> : "deezTools";

  // Renders the user menu
  const renderUserMenu = (status) => {

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
    if (status === "authenticated") {

      // If we don't have a profile picture from Deezer, use the default
      const userImage = session.user.image ? session.user.image :defaultUserImage

      return (
        <Dropdown align="end" className={styles["dropdown"]}>
          <Dropdown.Toggle as={CustomToggle}>
            <Image
              src={userImage}
              alt={`Username: ${session.user.name}`}
              className={styles["dropdown-image"]}
              layout="fill"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles["dropdown-menu"]}>
            <Dropdown.Header>Username: {session.user.name}</Dropdown.Header>
            <Dropdown.Item href="#" onClick={() => signOut({redirect: false})}>Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }

    // Else, show the sign in link
    else {
      return (
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="#" onClick={() => Popup("/signin", "Deezer Sign In")}>Sign in</Nav.Link>
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
        {renderUserMenu(status)}
      </Container>
    </Navbar>
  );
};

export default NavBar;
