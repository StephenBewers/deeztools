import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import BurgerMenu from "./burgerMenu";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar bg="white" className="px-2 border-bottom border-1 position-fixed vw-100">
      <Container fluid>
        <BurgerMenu />
        <Navbar.Brand href="/" className={`${styles.navbarBrand} mx-0 `}>
          deezTools
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item>
          <Nav.Link href="/">TODO</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
