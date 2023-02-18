import styled from "styled-components";

export const SCSkill = styled.div`
  font-family: "Inter", sans-serif;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  width: 100%;
`;

export const SCTitle = styled.div`
  color: #0a0a14;
  font-size: 3rem;
  line-height: 3.5rem;
  margin-top: 4.5rem;
  margin-bottom: 3.5rem;
  text-align: center;
  background-color: #ffffff;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    line-height: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 480px) {
    line-height: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;
export const SCProgram = styled.div`
  display: flex;
  background-color: #ffffff;
  margin-bottom: 8.25rem;
  font-size: 1rem;
  text-align: center;
  gap: 35px;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    font-size: 0.75rem;
    gap: 25px;
    margin-bottom: 3.5rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.75rem;
    gap: 15px;
    margin-bottom: 2.5rem;
  }
`;
export const SCCerceve = styled.div`
  background: #ffffff;
`;
export const SCP = styled.div`
  background: #ffffff;
  font-weight: 500;
  color: #777777;
  margin-top: 10px;
`;
export const SCImages = styled.img`
  @media only screen and (max-width: 768px) {
    width: 75%;
  }
  @media only screen and (max-width: 480px) {
    width: 50%;
  }
`;
