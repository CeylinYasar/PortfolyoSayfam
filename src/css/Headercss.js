import styled from "styled-components";
export const SCHeader = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;
export const SCNav = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 1.15rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    gap: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.75rem;
    gap: 10px;
  }
`;
export const SCImg = styled.img`
  width: 11%;
  @media only screen and (max-width: 768px) {
    width: 9%;
  }
  @media only screen and (max-width: 480px) {
    width: 6%;
  }
`;
export const SCA1 = styled.a`
  color: #6b7280;
  text-decoration: none;
`;
export const SCA2 = styled.a`
  color: #6b7280;
  text-decoration: none;
`;
export const SCA3 = styled.a`
  color: #6b7280;
  text-decoration: none;
`;
export const SCA4 = styled.a`
  color: #3730a3;
  text-decoration: none;
  border: 1px solid #3730a3;
  padding: 0.75rem;
  border-radius: 6px;
  background: #ffffff;
  &:hover {
    color: #ffffff;
    background: #3730a3;
  }
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;
