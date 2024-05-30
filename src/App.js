import React from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import MainContainer from "./styles/MainContainer.styles";
import SubContainer1 from "./styles/SubContainer1.Styles";
import SubContainer2 from "./styles/SubContainer2.Styles";
import NavigationBar from "./styles/NavigationBar.styles";
import NavButton from "./styles/NavButton.Styles";
import MuiIcon from "./components/MuiIcon";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <SubContainer1></SubContainer1>
        <SubContainer2></SubContainer2>
      </MainContainer>
      <NavigationBar>
        <NavButton>
          <MuiIcon type="home" size="large" color="gray" />
        </NavButton>
        <NavButton>
          <MuiIcon type="people" size="large" color="gray" />
        </NavButton>
        <NavButton>
          <MuiIcon type="review" size="large" color="gray" />
        </NavButton>
      </NavigationBar>
    </>
  );
}

export default App;
