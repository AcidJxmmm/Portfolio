import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import { IoIosDownload } from "react-icons/io";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/portfolio" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

          <Nav.Item className="fork-btn">
              <Button
                href="https://www.linkedin.com/in/tunghungphan/"
                target="_blank"
                className="fork-btn-inner"
              >
                <BsLinkedin style={{ fontSize: "1.2em" }} /> Linkedin
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/AcidJxmmm"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} /> Github
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="/Tung's-Resume.pdf"
                target="_blank"
                className="fork-btn-inner"
                download
              >
                <IoIosDownload style={{ fontSize: "1.2em" }} /> Resume
              </Button>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
