import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Django | Flask | Python",
          "Angular 10+ | Angular Universal | Typescript",
          "Reactjs | NextJS | Javascript | Typescript",
          "PSQL | MYSQL | MongoDB | Redis",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
