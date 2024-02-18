import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import style from "./Navbar.module.css";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className={`w-100 fixed-top ${style.navbarNav}`}>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
