import styled from "styled-components";
import { blinkAnimation } from "./animations";

export const FirstText = styled.h1`
  font-family: ${({ type }) =>
    type === "true" ? "nanumfontbold" : "nunumfont"};
  font-size: 30px;
  text-align: left;
  margin-bottom: 20px;
`;

export const DetailText = styled.p`
  font-size: 22px;
  text-align: left;
  margin-bottom: 40px;
  line-height: 1.5;
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const InfoBlock = styled.div`
  width: 900px;
  display: flex;
`;

export const InfoItem = styled.span`
  font-size: 22px;
  flex-basis: 50%;
  line-height: 1.5;
`;

export const DeveloperTextContainer = styled.div`
  font-size: 60px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 30px;
  display: flex;
`;

export const FixedText = styled.span`
  white-space: nowrap;
  margin-right: 30px;
`;

export const AnimatedText = styled.span`
  display: inline-block;
  text-decoration-color: #fff;

  #blink {
    animation: ${blinkAnimation} 1s infinite;
  }
`;
