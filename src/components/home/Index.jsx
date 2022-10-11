import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../heading/Heading";
import CardsGroup from "./CardsGroup";

export default function Portfolio() {
  return (
    <div>
      <Container className="homeH1">
        <Heading content="Portfolio" size="1" />
      </Container>
      <Container>
        <CardsGroup />
      </Container>
    </div>
  );
}
