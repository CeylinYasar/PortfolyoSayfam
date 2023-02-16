import React from "react";
import styled from "styled-components";
import Pizza from "../img/pizza.png";
import Minnet from "../img/minnet.png";
import {
  SCProjects,
  SCTitle5,
  SCSection,
  SCPizza,
  SCTitlepizza,
  SCContentpizza,
  SCBilinen,
  SCTodo,
  SCTitletodo,
  SCPo,
  SCContentTodo,
  SCT,
  SCYon,
  SCYon2,
  SCL,
  SCL2,
  SCImg1,
} from "../css/Projectscss";

function Projects() {
  return (
    <>
      <SCProjects id="projects">
        <SCTitle5>Projects</SCTitle5>
        <SCSection>
          <SCPizza>
            <SCTitlepizza>Pizza Order</SCTitlepizza>
            <SCContentpizza>
              We are waiting for you on the web page for delicious pizza
              orders.Bon appetite!
            </SCContentpizza>
            <SCBilinen>
              <SCT>react</SCT>
              <SCT>vercel</SCT>
              <SCT>axios</SCT>
              <SCT>router</SCT>
              <SCT>yup</SCT>
            </SCBilinen>
            <SCYon>
              <SCL
                href="https://github.com/CeylinYasar/pizza-order"
                target="_blank"
              >
                View on Github
              </SCL>
              <SCL href="https://pizza-order-c.vercel.app" target="_blank">
                Go to app →
              </SCL>
            </SCYon>
            <SCImg1>
              <img src={Pizza} style={{ width: "100%", height: "100%" }} />
            </SCImg1>
          </SCPizza>
          <SCTodo>
            <SCTitletodo>Gratitude Journal</SCTitletodo>
            <SCContentTodo>
              Shall we write a gratitude journal?. Let's go to the gratitude
              diary page!
            </SCContentTodo>
            <SCPo>
              <SCT>react</SCT>
              <SCT>vercel</SCT>
              <SCT>redux</SCT>
              <SCT>axios</SCT>
              <SCT>router</SCT>
            </SCPo>
            <SCYon2>
              <SCL2
                href="https://github.com/CeylinYasar/MinnetGunlugu"
                target="_blank"
              >
                View on Github
              </SCL2>
              <SCL2 href="https://minnet-gunlugu.vercel.app" target="_blank">
                Go to app →
              </SCL2>
            </SCYon2>
            <SCImg1>
              <img src={Minnet} style={{ width: "100%", height: "100%" }} />
            </SCImg1>
          </SCTodo>
        </SCSection>
      </SCProjects>
    </>
  );
}

export default Projects;
