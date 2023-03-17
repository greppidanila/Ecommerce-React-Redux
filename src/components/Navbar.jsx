import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const CustomNavbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <div className="d-flex align-items-center col-md-6">
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="fw-bold fs-1 Navbar-brand"
          >
            SHEIN
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              activeclassname="active"
              exact
              className="Nav-link fw-bold"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products"
              activeclassname="active"
              className="Nav-link"
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              activeclassname="active"
              className="Nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              activeclassname="active"
              className="Nav-link"
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" rounded shadow>
              <NavDropdown 
                title={
                  <span className="text-white">
                    <i className="fa fa-shopping-cart me-1"></i>
                    Cart ({state.length})
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/cart">
                  View Cart
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
