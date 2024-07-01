// WeatherIcon.js
import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: -30%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 30px;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

const WeatherIcon = ({ weatherIconAdrs, weatherMain }) => {
  const weatherDescriptions = {
    "clear sky": "맑음",
    "few clouds": "구름 조금",
    "scattered clouds": "구름 낌",
    "broken clouds": "구름 많음",
    "shower rain": "소나기",
    rain: "비",
    thunderstorm: "천둥번개",
    snow: "눈",
    mist: "안개",
  };

  return (
    <IconWrapper>
      <Icon src={weatherIconAdrs} alt={weatherMain} />
      <Tooltip>{weatherDescriptions[weatherMain]}</Tooltip>
    </IconWrapper>
  );
};

export default WeatherIcon;
