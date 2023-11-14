import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crono from "../../Assets/Projects/crono.png";
import chest from "../../Assets/Projects/chest.png";
import datavis from "../../Assets/Projects/datavis.png";
import peter from "../../Assets/Projects/peter.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chest}
              isBlog={false}
              title="3D Treasure Chest"
              description="The website showcases an engaging 3D chest treasure experience, skillfully crafted using HTML, CSS, and JavaScript. Users can interact with a virtual chest, leveraging the dynamic capabilities of JavaScript to create an immersive visually captivating environment."
              ghLink="https://github.com/AcidJxmmm/Demo/tree/0ef4adc2cec9519299e29f29e2962d8e7af3c28b/Website"
              demoLink="https://acidjxmmm.github.io/Demo/Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crono}
              isBlog={false}
              title="Cronoxo"
              description="The E-commerce website is designed to effectively promote a smartwatch product, employing a combination of HTML, CSS, and JavaScript to create a seamless and engaging user experience. The use of these technologies allows for a multi-faceted presentation of the smartwatch, catering to both low and high-fidelity details."
              ghLink="https://github.com/AcidJxmmm/Cronoxo"
              demoLink="https://acidjxmmm.github.io/Cronoxo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datavis}
              isBlog={false}
              title="Data Visualisation Project"
              description="This website serves as a platform for data visualization, focusing on lightning-sparked forest fires in the USA spanning the years 1992 to 2010. Developed using HTML, CSS, and Javascript, the site offers an interactive and informative experience for users interested in exploring and understanding the patterns and trends of these fires."
              ghLink="https://github.com/AcidJxmmm/FIT3179/tree/main/Assignment2"
              demoLink="https://acidjxmmm.github.io/FIT3179/Assignment2/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peter}
              isBlog={false}
              title="Treasure Hunt"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/AcidJxmmm/Treasure-Hunt"
              demoLink="https://acidjxmmm.github.io/Treasure-Hunt"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
