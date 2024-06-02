import styled from "styled-components";

export const PeopleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundText = styled.div`
  font-size: 96px;
  font-weight: bold;
  color: #b7b8b9;
  opacity: 0.4;
  position: absolute;
  z-index: 1;
`;

export const ForegroundText = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: black;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.$marginTop ? "50px" : "0")};
`;

export const HighlightedText = styled.span`
  color: #e78d59;
  margin-left: 8px;
`;

export const CenteredDiv = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin: auto; /* 중앙으로 정렬 */
`;

export const Outline = styled.div`
  position: relative;
  width: 600px;
  height: 300px;
  margin: 10px auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  &:hover span:nth-child(1) {
    width: 100%;
  }
  &:hover span:nth-child(2) {
    height: 100%;
  }
  &:hover span:nth-child(3) {
    width: 100%;
  }
  &:hover span:nth-child(4) {
    height: 100%;
  }
  span:nth-child(1) {
    left: 0;
    top: 0;
    width: 0;
    height: 5px;
    transition: width 0.1s;
  }
  span:nth-child(2) {
    right: 0;
    top: 0;
    width: 5px;
    height: 0;
    transition: height 0.1s linear 0.1s;
  }
  span:nth-child(3) {
    right: 0;
    bottom: 0;
    width: 0;
    height: 5px;
    transition: width 0.1s linear 0.2s;
  }
  span:nth-child(4) {
    left: 0;
    bottom: 0;
    width: 5px;
    height: 0;
    transition: height 0.1s linear 0.3s;
  }
  &:not(:hover) span:nth-child(1) {
    transition: width 0.1s linear 0.3s;
    width: 0;
  }
  &:not(:hover) span:nth-child(2) {
    transition: height 0.1s linear 0.2s;
    height: 0;
  }
  &:not(:hover) span:nth-child(3) {
    transition: width 0.1s linear 0.1s;
    width: 0;
  }
  &:not(:hover) span:nth-child(4) {
    transition: height 0.1s;
    height: 0;
  }
`;

export const OutlineSpan = styled.span`
  position: absolute;
  background: #e78d59;
  opacity: 0.8;
`;
