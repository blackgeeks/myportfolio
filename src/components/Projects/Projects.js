import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import doyo from "../../Assets/Projects/hiwac.png";
import erp from "../../Assets/Projects/bridge.png";
import startuptree from "../../Assets/Projects/startuptree.png";

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
              imgPath={startuptree}
              isBlog={false}
              title="Startup Tree"
              description={[
                "StartupTree is the glue that holds our growing entrepreneurial ecosystem together. It helps us make vital connections and keep track of data that is crucial to our decision making.",
                "Roles and Resposibilities :",
                "Collaborated with cross functional team to define, design and ship new features using Python, Javascript, Django and Reactjs."
              ]}
              link="https://www.startuptree.co/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doyo}
              isBlog={false}
              title="Hiwac"
              description={[
                `Hiwac is a next generation end to end import and export solution for the
                business community. This application is made using cutting edge
                technologies e.g Angular 8, Django & Python. My core responsibilities in
                this product are to make the product modules from scratch to end and
                manage the respective teams.`,
                "Roles and Resposibilities :",
                "Collaborated with cross functional team to define, design and ship new features using Python, Javascript, Django and Reactjs."

              ]}
              link="https://hiwac.com/authentication/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erp}
              isBlog={false}
              title="bridgeportclaims"
              description={[
                `'bridgeportclaims.com' is a web application designed for the patient
                claims system in Ohio(US). The sole purpose of this application was to
                maintain records of claims for a patient and then complete a whole
                procedure from start to end. I have worked as a front-end developer in
                this giant health project.`,
                "Roles and Resposibilities :",
                "Collaborated with cross functional team to define, design and ship new features using Python, Javascript, Django and Reactjs."

              ]}
              link="https://bridgeportclaims.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dawn}
              isBlog={false}
              title="DAWN"
              description={[
                "A service provider between tourists and the owners of house to make the negotiation through the app before coming to the trip so that they can have multiple options to consider and reasonable rent for the stay.",
                "Roles and Resposibilities :",
                "Collaborated with cross functional team to define, design and ship new features using Reactjs library."
              ]}
              link="https://hiimdawn.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={topsoilsearch}
              isBlog={false}
              title="TopSoil Search"
              description={[
                "Roles and Resposibilities :",
                "My role was to collaborate with cross functional team to define, design and ship new features using Django Rest Framework and Angular."
              ]}
              link="https://topsoilsearch.co.uk/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
