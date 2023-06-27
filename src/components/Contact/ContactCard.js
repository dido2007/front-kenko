import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ContactCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nous sommes situés sur la Plage Rocheuse de Sidi Bou Said,
            Rue des Hafsides, Marsa 2070.
            <br />
            <br />
            N'hésitez pas à nous contacter pour toute demande ou suggestion :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Téléphone : <strong className="purple">+216 24637637</strong>
            </li>
            <li className="about-activity">
              <ImPointRight /> Horaires d'ouverture :
              <ul>
                <li>vendredi: 11:30–22:00</li>
                <li>samedi: 11:30–22:00</li>
                <li>dimanche: Fermé</li>
                <li>lundi: 11:30–22:00</li>
                <li>mardi: 11:30–22:00</li>
                <li>mercredi: 11:30–22:00</li>
                <li>jeudi: 11:30–22:00</li>
              </ul>
            </li>
          </ul>
          <p>Faites vous livrer en 30 a 40 min</p>
          <a href="https://food.jumia.com.tn/restaurant/w3hn/kenko-food-bar" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Livraison</button>
          </a>
          <br></br>
          <br></br>
          <br></br>

          <footer className="blockquote-footer">Kenkō</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
