import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Layout() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <p className="bg-primary"> Bootstrap</p>
          </Col>
          <Col>
            <p className="bg-primary"> Bootstrap</p>
          </Col>
          <Col>
            <p className="bg-primary"> Bootstrap</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
