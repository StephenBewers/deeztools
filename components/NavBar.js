import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import BurgerMenu from "./burgerMenu";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar bg="white" sticky="top" className="px-2 border-bottom border-1">
      <Container fluid>
        <BurgerMenu />
        <Navbar.Brand href="/" className={`${styles.navbarBrand} mx-0 `}>
          deezTools
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/">Sign in with Deezer</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
