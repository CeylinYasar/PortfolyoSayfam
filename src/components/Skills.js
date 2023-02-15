import React from "react";
import Javascript from "../img/javascript.jpg";
import react from "../img/react.png";
import Redux from "../img/redux.png";
import node from "../img/node.png";
import Vs from "../img/vs.png";
import Figma from "../img/figma.png";
import styled from "styled-components";
import {
  SCSkill,
  SCTitle,
  SCProgram,
  SCCerceve,
  SCP,
  SCImages,
} from "../css/Skillscss";

function Skills() {
  return (
    <SCSkill id="skills">
      <SCTitle>Skills</SCTitle>
      <SCProgram>
        <SCCerceve>
          <SCImages src={Javascript} />
          <SCP>JAVASCRIPT</SCP>
        </SCCerceve>
        <SCCerceve>
          <SCImages src={react} />
          <SCP>REACT</SCP>
        </SCCerceve>
        <SCCerceve>
          <SCImages src={Redux} />
          <SCP>REDUX</SCP>
        </SCCerceve>
        <SCCerceve>
          <SCImages src={node} />
          <SCP>NODE</SCP>
        </SCCerceve>
        <SCCerceve>
          <SCImages src={Vs} />
          <SCP>VS CODE</SCP>
        </SCCerceve>
        <SCCerceve>
          <SCImages src={Figma} />
          <SCP>FIGMA</SCP>
        </SCCerceve>
      </SCProgram>
    </SCSkill>
  );
}
export default Skills;
