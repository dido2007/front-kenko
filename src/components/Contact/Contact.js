import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contactez-<strong className="purple">nous</strong>
            </h1>
            <ContactCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="contact-img"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.1727030259635!2d10.330114676492608!3d36.881468872223905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5b9d4321e5b%3A0xd3d6626e4f572024!2sKenk%C5%8D%20food%20bar!5e1!3m2!1sfr!2stn!4v1686315964683!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
