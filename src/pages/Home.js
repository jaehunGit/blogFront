import React from "react";
import MainContent from "../styles/MainContent.styles";
import {
  FirstText,
  DeveloperTextContainer,
  FixedText,
  DetailText,
  PersonalInfo,
  InfoBlock,
  InfoItem,
  AnimatedText,
} from "../styles/FontStyles.Styles";

const wordArr = ["WEB DEVELOPER.", "JEONG JAEHUN."];

const Home = () => {
  // 상태관리를 위한 state를 선언한다.
  const [text, setText] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [line, setLine] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (count < wordArr[line].length) {
        setText((prevText) => prevText + wordArr[line][count]);
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          setCount(0);
          setLine((prevLine) => (prevLine + 1) % wordArr.length);
        }, 2000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [count, line]);
  return (
    <>
      <MainContent $center $marginLeft>
        <FirstText type="false">HI! HOW ARE YOU?</FirstText>
        <DeveloperTextContainer>
          <FixedText>I'M </FixedText>
          <AnimatedText>
            {text}
            <span id="blink">|</span>
          </AnimatedText>
        </DeveloperTextContainer>
        <DetailText>
          안녕하세요! 저는 정재훈입니다. 😀
          <br />
          새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및
          리뷰를
          <br /> 좋아합니다.
          <br />
          현재 프론트엔드 개발자로 구직중입니다. 맡은 일에 자부심을 갖고 도전을
          <br />
          경험할 수 있는 회사에서 일하고 싶습니다.
        </DetailText>
        <FirstText type="true">PERSONAL INFOS</FirstText>
        <PersonalInfo>
          <InfoBlock>
            <InfoItem>Name: 정재훈</InfoItem>
            <InfoItem>Age: 32, 1993.08</InfoItem>
          </InfoBlock>
          <InfoBlock>
            <InfoItem>Phone: 010.4789.9768</InfoItem>
            <InfoItem>Address: 안산시 단원구</InfoItem>
          </InfoBlock>
          <InfoItem>Email: ghty632@gmail.com</InfoItem>
        </PersonalInfo>
      </MainContent>
    </>
  );
};

export default Home;
