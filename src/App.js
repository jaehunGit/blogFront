import React from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import MainContainer from "./styles/MainContainer.styles";
import SubContainer1 from "./styles/SubContainer1.Styles";
import SubContainer2 from "./styles/SubContainer2.Styles";
import NavigationBar from "./styles/NavigationBar.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <SubContainer1></SubContainer1>
        <SubContainer2></SubContainer2>
      </MainContainer>
      <NavigationBar>
        {/* <div style={{ width: "100%", height: "50px" }}></div>
        <div style={{ width: "100%", height: "50px" }}></div>
        <div style={{ width: "100%", height: "50px" }}></div> */}
      </NavigationBar>
    </>
  );
}

export default App;
