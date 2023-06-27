import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pan </span>
            from <span className="purple"> Vietnam.</span>
            <br /> I am a fresh graduate from Monash University with Bachelor of IT major in Software Development. 
            Additionally, I studied Interactive Media as my minor.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Archive Grails
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing lasts forever but good design""
            {" "}
          </p>
          <footer className="blockquote-footer">Pan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
