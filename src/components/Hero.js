import React from "react";
import styled from "styled-components";
import Resim from "../img/resim.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  SCHero,
  SCLeft,
  SCRight,
  SCName,
  SCLine,
  SCBaslik,
  SCContent,
  SCResim,
  SCLink,
  SCMail,
  SCGithub,
  SCLinkedin,
} from "../css/Herocss";

function Hero() {
  return (
    <SCHero>
      <SCLeft>
        <SCName>
          <SCLine></SCLine>Ceylin Yaşar
        </SCName>
        <SCBaslik>I am a Full-Stack Developer...</SCBaslik>
        <SCContent>
          Hi, I’m Ceylin. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable full stack products with
          great user experiences.
        </SCContent>
        <SCLink>
          <SCMail href="mailto:ceylinrukiyeyasar@gmail.com" target="_blank">
            Contact Me
          </SCMail>
          <SCGithub href="https://github.com/CeylinYasar" target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "10px" }} />
            Github
          </SCGithub>
          <SCLinkedin
            href="https://www.linkedin.com/in/ceylin-rukiye-yasar/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ marginRight: "10px" }}
            />
            LinkedIn
          </SCLinkedin>
        </SCLink>
      </SCLeft>
      <SCRight>
        <SCResim src={Resim} />
      </SCRight>
    </SCHero>
  );
}

export default Hero;
