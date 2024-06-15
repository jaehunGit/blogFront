import styled from "styled-components";

export const MainContainer = styled.div`
  width: 75vw;
  height: 75vh;
  margin: auto auto;
  border-radius: 30px;
  box-shadow: 0px 0px 50px black;
  background: linear-gradient(#344648, #7d9095);
  display: flex;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  height: 100%;
  margin-left: ${(props) => (props.$marginLeft ? "140px" : "0")};
`;
