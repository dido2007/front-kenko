import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import img1 from "../../Assets/Projects/1.jpg";
import img2 from "../../Assets/Projects/2.jpg";
import img3 from "../../Assets/Projects/3.jpg";
import img4 from "../../Assets/Projects/4.jpg";
import img5 from "../../Assets/Projects/5.jpg";
import img6 from "../../Assets/Projects/6.jpg";
import img7 from "../../Assets/Projects/7.jpg";
import img8 from "../../Assets/Projects/8.jpg";
import img9 from "../../Assets/Projects/9.jpg";
import img10 from "../../Assets/Projects/10.jpg";
import img11 from "../../Assets/Projects/11.jpg";
import img12 from "../../Assets/Projects/12.jpg";
import img13 from "../../Assets/Projects/13.jpg";
import img14 from "../../Assets/Projects/14.jpg";
import img15 from "../../Assets/Projects/15.jpg";
import img16 from "../../Assets/Projects/16.jpg";
import img17 from "../../Assets/Projects/17.jpg";
import img18 from "../../Assets/Projects/18.jpg";
import img19 from "../../Assets/Projects/19.jpg";
import img20 from "../../Assets/Projects/20.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            Nos <strong className="purple">Poke Balls </strong>
          </h1>
          <p style={{ color: "white" }}>
            Signature bowl à la base du riz japonais
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img1}
                isBlog={false}
                title="Poke bowl au daurade"
                description="Ceviche de daurade, ananas, gingembre mariné, chou rouge, carotte, concombre, nori, graine de sésame"
                prix="19,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img2}
                isBlog={false}
                title="Poke bowl au saumon"
                description="Saumon mariné, avocat, brocoli, gingembre mariné, ananas, chou rouge, radis, nori, graine de sésame"
                prix="24,000DT"
              />
            </Col>
              <h1 className="project-heading">
                <br ></br>
            Nos <strong className="purple">Poke Bar</strong>
              </h1> 
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img3}
                isBlog={false}
                title="Poke bar à base de riz japonais"
                description="Riz japonais"
                prix="5,500DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img4}
                isBlog={false}
                title="Poke bar à base de quinoa"
                description="Quinoa"
                prix="7,000DT"
              />
            </Col>
            <h1 className="project-heading">
            Nos <strong className="purple">Bibimbap</strong>
          </h1>
          <p style={{ color: "white" }}>
            Un incontournable de la cuisine coréenne
          </p>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img5}
                isBlog={false}
                title="Bibimbap végétarien"
                description="Tofu, champignons, carotte, courgette, épinards, poivron, oignons caramélisés, œuf confit, riz à la coréenne. Servi avec une sauce pimentée maison."
                prix="22,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img6}
                isBlog={false}
                title="Bibimbap au poulet\"
                description="Poulet mariné au soja, champignons, carotte, courgette, épinards, poivron, oignons caramélisés, œuf confit, riz à la coréenne. Servi avec une sauce pimentée maison."
                prix="23,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img7}
                isBlog={false}
                title="Bibimbap au bœuf"
                description="Bœuf mariné au soja, champignons, carotte, courgette, épinards, poivron, oignons caramélisés, œuf confit, riz à la coréenne. Servi avec une sauce pimentée maison."
                prix="26,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img8}
                isBlog={false}
                title="Bibimbap aux calamars"
                description="Calamars épicés, champignons, carotte, courgette, épinards, poivron, oignons caramélisés, œuf confit, riz à la coréenne. Servi avec une sauce pimentée maison."
                prix="27,000DT"
              />
            </Col>
            <h1 className="project-heading">
            Nos <strong className="purple">Nouilles Yakisoba</strong>
            </h1>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img9}
                isBlog={false}
                title="Yakisoba végétarienne"
                description="Servi avec des légumes croquants au wok"
                prix="22,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img10}
                isBlog={false}
                title="Yakisoba au poulet"
                description="Servi avec des légumes croquants au wok"
                prix="24,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img11}
                isBlog={false}
                title="Yakisoba au bœuf"
                description="Servi avec des légumes croquants au wok"
                prix="27,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img12}
                isBlog={false}
                title="Yakisoba au saumon"
                description="Servi avec des légumes croquants au wok"
                prix="30,000DT"
              />
            </Col>
            <h1 className="project-heading">
            Nos <strong className="purple">Kenko Appetizers</strong>
            </h1>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img13}
                isBlog={false}
                title="Tartare de saumon à l’aneth"
                description="Saumon, quinoa rouge et noir, avocat, graine de sésame wasabi, crème d’avocat, sauce aux fines herbes"
                prix="21,000DT"
              />
            </Col>
            <h1 className="project-heading">
            Nos <strong className="purple">Signature Salads</strong>
            </h1>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img14}
                isBlog={false}
                title="Salade quinoa"
                description="Quinoa rouge et noir, tomate cerise, roquette, choux, haricot vert, fruit de saison, sauce légère au citron"
                prix="17,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img15}
                isBlog={false}
                title="Salade estivale"
                description="Laitue, tomate cerise, brocoli, aubergine, chou rouge, ananas, lentille, mozzarella, vinaigrette yuzu"
                prix="17,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img16}
                isBlog={false}
                title="Salade de riz"
                description="Riz basmati, thon, œuf, tomate cerise, mais, petit pois, olives vertes, sauce légère au citron"
                prix="13,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img17}
                isBlog={false}
                title="Salade de pois chiche"
                description="Feta, pois chiche, concombre, radis, tomate cerise, oignons, grenade, vinaigrette classique"
                prix="11,000DT"
              />
            </Col>
            <h1 className="project-heading">
            Notre <strong className="purple">Bar a Salade</strong>
            </h1>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img18}
                isBlog={false}
                title="Composez votre salade"
                description=" "
                prix="3,800DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img19}
                isBlog={false}
                title="Salade à base de quinoa"
                description=" "
                prix="7,000DT"
              />
            </Col>
            <h1 className="project-heading">
            Nos <strong className="purple">Gyozas</strong>
            </h1>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img20}
                isBlog={false}
                title="Gyoza végan"
                description="4 pièces"
                prix="11,500DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img20}
                isBlog={false}
                title="Gyoza bœuf"
                description="4 pièces"
                prix="13,000DT"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img20}
                isBlog={false}
                title="Gyoza bœuf fromage"
                description="4 pièces"
                prix="14,000DT"
              />
            </Col>
          </Row>
        </Container>
    </Container>
  );
}

export default Projects;
