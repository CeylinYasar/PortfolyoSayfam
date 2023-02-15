import React from "react";
import styled from "styled-components";
import Pizza from "../img/pizza.png";
import Todo from "../img/todoresim.png";
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
            <SCTitletodo>ToDo List</SCTitletodo>
            <SCContentTodo>
              It's time to plan to get your life in order. Let's go to do list.
            </SCContentTodo>
            <SCPo>
              <SCT>react</SCT>
              <SCT>vercel</SCT>
              <SCT>redux</SCT>
            </SCPo>
            <SCYon2>
              <SCL2 href="https://github.com/CeylinYasar/todo" target="_blank">
                View on Github
              </SCL2>
              <SCL2 href="https://todo-ceylin.vercel.app" target="_blank">
                Go to app →
              </SCL2>
            </SCYon2>
            <SCImg1>
              <img src={Todo} style={{ width: "100%", height: "100%" }} />
            </SCImg1>
          </SCTodo>
        </SCSection>
      </SCProjects>
    </>
  );
}

export default Projects;
