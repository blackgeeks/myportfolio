import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amad uddin </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br /> <br />
            I am a full stack web developer having 5+ years of experience in cutting edge technologies. I am working in Django/Python/Flask on backend side and on frontend side he is working on Angular 10, Angular universal, ReactJs and NextJs.
            I have been working on different projects both on product base and project based. I have been working on the REST framework and Chat system using Django channels. I have also developed the audio, video calling system using webRTC.
            <br />  <br /> 
            Beside this, I have good working experience with Docker, Docker swarm, AWS, Heroku and Google cloud. I have also worked with Chinese cloud vendors Tencent, Alibaba and AWS China.
            I worked to deliver projects using Django, Angular 10, ReactJS, NextJS technologies. Being a full stack developer, I can handle complex requirements and has been very effective at analyzing the business requirements and providing quality solutions for challenging problems.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
