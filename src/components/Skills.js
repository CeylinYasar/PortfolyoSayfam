import React from "react";
import { data } from "./data";
import Skill from "./Skill";
import { SCSkill, SCTitle, SCProgram } from "../css/Skillscss";

function Skills() {
  return (
    <SCSkill id="skills">
      <SCTitle>Skills</SCTitle>
      <SCProgram>
        {data.map((item) => (
          <Skill data={item} />
        ))}
      </SCProgram>
    </SCSkill>
  );
}
export default Skills;
