import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import People from "./pages/People";
import Review from "./pages/Review";
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
        <SubContainer1>
          <div
            style={{
              width: "100%",
              height: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid white",
                borderRadius: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/image.png"
                alt="다다"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "50px",
                fontFamily: "nanumfontbold",
                color: "white",
                letterSpacing: "5px",
                marginBottom: "15px",
              }}
            >
              정 재 훈
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Front Developer
            </span>
            <a href="https://github.com/jaehunGit?tab=repositories">
              <img
                src="/images/github.png"
                alt="githubIcon"
                style={{ width: "50px", height: "50px" }}
              />
            </a>
          </div>
          <div
            style={{
              width: "100%",
              height: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              color: "white",
            }}
          >
            @2024 all rights reserved
          </div>
        </SubContainer1>
        <SubContainer2>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </SubContainer2>
      </MainContainer>
      <NavigationBar>
        <NavButton>
          <MuiIcon type="home" size="large" color="#gray" />
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
