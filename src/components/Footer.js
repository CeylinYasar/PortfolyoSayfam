import React from "react";
import styled from "styled-components";
import {
  SCFooter,
  SCTitleFooter,
  SCAFooter,
  SCF,
  SCF1,
  SCF2,
} from "../css/Footercss";

function Footer() {
  return (
    <SCFooter>
      <SCTitleFooter>Let’s work together on your next product.</SCTitleFooter>
      <SCAFooter>
        <SCF href="https://github.com/CeylinYasar" target="_blank">
          Github
        </SCF>
        <SCF1
          href="https://www.linkedin.com/in/ceylin-rukiye-yasar/"
          target="_blank"
        >
          LinkedIn
        </SCF1>
        <SCF2 href="mailto:ceylinrukiyeyasar@gmail.com" target="_blank">
          Email
        </SCF2>
      </SCAFooter>
    </SCFooter>
  );
}
export default Footer;
