import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto">
      <Container>
        <Row className=" py-2">
          <Col>
            <p className="mb-0" style={{color:"grey"}}>&copy; 2023 Danila Greppi</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
