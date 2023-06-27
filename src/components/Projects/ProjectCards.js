import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { GoPlus } from "react-icons/go";
import { GiBleedingEye } from "react-icons/gi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Card.Text>
          {props.prix}
         </Card.Text>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
