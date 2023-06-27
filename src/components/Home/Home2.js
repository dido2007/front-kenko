import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/friendship.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Prenez soin de votre <span className="purple-black">santé</span>
            </h1>
            <p className="home-about-body">
              Nourriture saine pour un corps sain
              <br />
              <br />
              <span className="purple-black">Kenkō Food Bar</span>
              <br />
              <br />
              Bienvenue a Kenkō, votre adresse incontournable pour une expérience culinaire unique en Tunisie. Notre concept novateur vous permet de découvrir une variété de cuisines en un seul endroit. Vous pouvez choisir parmi nos bases savoureuses, telles que les salades fraîches, le riz parfumé, le quinoa nutritif ou les pâtes délicieuses, et les personnaliser avec une sélection d'ingrédients frais et de sauces exquises. Cette approche offre un service rapide sans compromettre la fraîcheur des aliments, tout en établissant une relation de confiance entre notre équipe et nos précieux clients. Venez nous rejoindre pour une expérience culinaire qui éveillera vos papilles et comblera toutes vos envies gastronomiques.            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <h1>CE QUE NOUS OFFRONS</h1>
            <p>
              Un service rapide, composez tout droit dans votre assiette grâce à notre bar à salade.
            </p>  
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
