import styled from "styled-components";

export const SCHero = styled.div`
  display: flex;
  gap: 5%;
  margin-top: 4rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: 768px) {
    margin-top: 3rem;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 2rem;
  }
`;
export const SCLeft = styled.div`
  width: 65%;
`;
export const SCRight = styled.div`
  width: 30%;
  margin: 1.25rem 0rem;
`;
export const SCName = styled.div`
  font-size: 1.25rem;
  font-family: "Inter", sans-serif;
  color: #4338ca;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
export const SCLine = styled.div`
  height: 5px;
  width: 102px;
  background: linear-gradient(
    to bottom,
    transparent 2px,
    #4338ca 2px,
    #3730a3 3px,
    transparent 3px
  );
  margin-right: 8px;
  @media only screen and (max-width: 768px) {
    width: 80px;
  }
  @media only screen and (max-width: 480px) {
    width: 50px;
  }
`;
export const SCBaslik = styled.div`
  font-size: 4.5rem;
  font-family: "Inter", sans-serif;
  margin-top: 1.15rem;
  margin-bottom: 1.15rem;
  color: #1f2937;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export const SCContent = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 1.15rem;
  line-height: 1.75rem;
  color: #6b7280;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
export const SCResim = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  border-radius: 18px;
`;
export const SCLink = styled.div`
  margin-top: 1.15rem;
  margin-bottom: 1.15rem;
  font-family: "Inter", sans-serif;
  font-size: 1.15rem;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    gap: 8px;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 480px) {
    gap: 4px;
    font-size: 0.5rem;
    margin-bottom: 0.75rem;
  }
`;
export const SCMail = styled.a`
  color: #ffffff;
  text-decoration: none;
  border: 1px solid #3730a3;
  padding: 0.7rem;
  border-radius: 6px;
  background: #3730a3;
  text-align: center;
  &:hover {
    color: #3730a3;
    background: #ffffff;
  }
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 0.5rem;
  }
`;
export const SCGithub = styled.a`
  color: #3730a3;
  text-decoration: none;
  border: 1px solid #3730a3;
  padding: 0.7rem;
  border-radius: 6px;
  background: #ffffff;
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 0.5rem;
  }
`;
export const SCLinkedin = styled.a`
  color: #3730a3;
  text-decoration: none;
  border: 1px solid #3730a3;
  padding: 0.7rem;
  border-radius: 6px;
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 0.5rem;
  }
  background: #ffffff;
`;
