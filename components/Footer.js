import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {

    return (
        <footer className="footer mt-auto py-3 border-top border-1 text-center">
          <Container fluid>
            <span className="small text-muted">
              Copyright © 2022{" "}
              <a href="https://stephenbewers.com/" target="_blank" rel="noreferrer">Stephen Bewers</a>
            </span>
          </Container>
        </footer>
    )
}

export default Footer