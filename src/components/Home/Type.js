import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Nourriture saine",
          "Composez ce que vous mangez",
          "Decouvrez de nouvelles saveurs",
          "Service rapide",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
