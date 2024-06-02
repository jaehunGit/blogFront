import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  height: 100%;
  margin-left: ${(props) => (props.$marginLeft ? "140px" : "0")};
`;

export default MainContent;
