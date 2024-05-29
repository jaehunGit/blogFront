import React from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import MainContainer from "./styles/MainContainer.styles";
import SubContainer1 from "./styles/SubContainer1.Styles";
import SubContainer2 from "./styles/SubContainer2.Styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <SubContainer1></SubContainer1>
        <SubContainer2></SubContainer2>
      </MainContainer>
    </>
  );
}

export default App;
