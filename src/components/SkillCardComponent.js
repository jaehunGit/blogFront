import React from "react";

import {
  CardContainer,
  Header,
  SkillImage,
  Title,
  Content,
  HighlightedSeparator,
} from "../styles/SkillCardstyles.styles";

const SkillCardComponent = ({ title, imageSrc, items }) => {
  return (
    <CardContainer>
      <Header>
        <SkillImage alt="profile" src={imageSrc} />
        <Title>: {title}</Title>
      </Header>
      <Content>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <HighlightedSeparator> ● </HighlightedSeparator>
              {item}
            </li>
          ))}
        </ul>
      </Content>
    </CardContainer>
  );
};

export default SkillCardComponent;
