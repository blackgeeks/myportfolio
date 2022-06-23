import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import amad from "../../Assets/amad.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />
              Hi there! You're in the right place and have got a suitable person
              to work with. Let me introduce myself. <br /> <br />
              I have extensive experience of 5+ years working with cutting-edge
              technologies, and I have excellent skills in building a great,
              user-friendly, interactive, and scale-able applications. <br />{" "}
              <br />
              I have worked with many clients and worked on several projects,
              from mainstream to specifically unique and great enterprise-level
              projects. I have achieved significant milestones and delivered
              exceptional and remarkable work to all of my clients.
              <br /> <br />
              <b>Skills:</b> <br />
                <b className="purple">
                  Django{" "}
                  <span className="sub_skills">
                    {" "}
                    (DRFW, Django Channels, Unit Tests, Factory Boy)
                  </span>{" "}
                  <br />
                  Python{" "}
                  <span className="sub_skills">
                    {" "}
                    (Selenium, Scrapy, Beautiful soap )
                  </span>{" "}
                  <br />
                  <span className="skills">
                    Angular10+, Angular Universal, Reactjs, NextJS, Javascript, Typescript
                  </span>{" "}
                  <br />
                  AWS{" "}
                  <span className="sub_skills">
                    (Conginito, S3, EC2, Lamda, Elastic Search, Cloudformation,
                    cloud front, cloud watch, SNS, SQS)
                  </span>
                  
                  <br />
                  <span className="skills">
                    Docker, Docker Swarm ,Google Cloud Services, Heroku, Stripe,
                    JIRA, Trello, Grafana, Tencent Cloud, Sentry, Mailchimp
                  </span>
                  <br />
                  Certification{" "}
                  <span className="sub_skills">
                    (AWS Cloud Practitioner)
                  </span>
                </b>
              <br />
              {/* <br />I usually used to build */}
              {/* <i>
                <b className="purple">Web Technologies and Products. </b>
              </i> */}
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Django</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Reactjs.</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={amad} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/blackgeeks"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
             
              </li> */}
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/amad-ud-din"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://stackoverflow.com/users/6085791/maadi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaStackOverflow />
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
