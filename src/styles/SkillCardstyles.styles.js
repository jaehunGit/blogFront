// src/styles/ProfileCard.styles.js
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

export const SkillImage = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 20px;
  object-fit: cover;
`;

export const Title = styled.div`
  margin-left: 20px;
  font-size: 25px;
  font-family: "nanumfontbold";
  margin-top: 10px;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 30px;
  font-size: 17px;
`;

export const HighlightedSeparator = styled.span`
  color: #e78d59;
  margin-right: 10px;
`;
