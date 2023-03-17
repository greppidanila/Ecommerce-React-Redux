import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Background from "../assets/bg.png";
import Products from "./Products";

const Home = () => {
  return (
    <Container className="hero">
      <Card bg="dark" text="white" border="0" style={{marginTop:"28px"}}>
        <Card.Img src={Background} alt="Background"  />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <Container>
            <Row>
              <Col>
                <Card.Title className="display-3 fw-bolder mb-0">
                  NEW ARRIVALS
                </Card.Title>
                <Card.Text className="lead fs-2">
                  CHECK OUT ALL THE TRENDS
                </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Products />
      </Container>
    </Container>
  );
};

export default Home;
