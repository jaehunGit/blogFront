import styled from "styled-components";

export const IconContainer = styled.div`
  font-size: large;
  color: ${({ $isActive, color }) => ($isActive ? "#12B886" : color)};
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #12b886;
  }
`;

export default IconContainer;
