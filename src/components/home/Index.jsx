import React from "react";
import { Card, Container } from "react-bootstrap";
import Footer from "../footer/Footer";
import Heading from "../heading/Heading";
import CardsGroup from "./CardsGroup";

export default function Portfolio() {
  return (
    <>
      <main>
        <Container>
          <Container className="homeH1">
            <Heading content="Portfolio" size="1" />
          </Container>
          <Container>
            <CardsGroup />
          </Container>
        </Container>
      </main>
      <div className="footerDiv">
        <Footer />
      </div>
    </>
  );
}
