import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Kenkō </span>
            est un Bar a salade situe a <span className="purple"> La Marsa, Tunisie.</span>
            <br />Cree en <span className="purple">Date de creation  </span> par <span className="purple"> Fondateurs</span>, le restaurant fidelise aussi bien les etudiants que les autres clients grace a tout type de formules.
            <br />
            Voici quelques unes de nos qualites :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Service rapide
            </li>
            <li className="about-activity">
              <ImPointRight /> Nourriture saine
            </li>
            <li className="about-activity">
              <ImPointRight /> Tout tarifs
            </li>
          </ul>
          <footer className="blockquote-footer">Kenkō</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
