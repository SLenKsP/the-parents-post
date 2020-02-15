import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Carousel>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
