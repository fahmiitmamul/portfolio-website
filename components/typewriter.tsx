import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "Backend Developer",
          "Fullstack Developer",
          "Web Designer",
        ],
        autoStart: true,
        loop: true,
        cursor: "|",
      }}
    />
  );
};

export default TypewriterComponent;
