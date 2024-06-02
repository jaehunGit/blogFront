import React, { useState } from "react";
import MainContent from "../styles/MainContent.styles";
import {
  PeopleContainer,
  BackgroundText,
  ForegroundText,
  HighlightedText,
  CenteredDiv,
  Outline,
  OutlineSpan,
} from "../styles/PeopelStyles.styles";
import {
  TabStyles,
  TabListStyles,
  TabIndicatorProps,
  CustomTabPanel,
} from "../styles/MuiCustomStyles.Styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import SkillCardComponent from "../components/SkillCardComponent";
import { frontendSkills, backendSkills, toolsSkills } from "../data/skillsData";

const People = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainContent $center={false} $marginLeft={false}>
      <PeopleContainer>
        <BackgroundText>SKILLS</BackgroundText>
        <ForegroundText>
          ABOUT <HighlightedText>ME</HighlightedText>
        </ForegroundText>
      </PeopleContainer>
      <CenteredDiv>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box sx={TabListStyles}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                TabIndicatorProps={TabIndicatorProps}
              >
                <Tab label="FrontEnd" value="1" sx={TabStyles} />
                <Tab label="BackEnd" value="2" sx={TabStyles} />
                <Tab label="Tools" value="3" sx={TabStyles} />
                <Tab label="Project" value="4" sx={TabStyles} />
              </TabList>
            </Box>
            <CustomTabPanel active={value === "1"}>
              {frontendSkills.map((data, index) => (
                <Outline key={index}>
                  <OutlineSpan />
                  <OutlineSpan />
                  <OutlineSpan />
                  <OutlineSpan />
                  <SkillCardComponent
                    title={data.title}
                    imageSrc={data.imageSrc}
                    items={data.items}
                  />
                </Outline>
              ))}
            </CustomTabPanel>
            <CustomTabPanel active={value === "2"}>
              {backendSkills.map((data, index) => (
                <Outline key={index}>
                  <OutlineSpan />
                  <OutlineSpan />
                  <OutlineSpan />
                  <OutlineSpan />
                  <SkillCardComponent
                    title={data.title}
                    imageSrc={data.imageSrc}
                    items={data.items}
                  />
                </Outline>
              ))}
            </CustomTabPanel>
            <CustomTabPanel active={value === "3"}>
              {toolsSkills.map((data, index) => (
                <Outline key={index}>
                  <OutlineSpan />
                  <OutlineSpan />
                  <OutlineSpan />
                  <OutlineSpan />
                  <SkillCardComponent
                    title={data.title}
                    imageSrc={data.imageSrc}
                    items={data.items}
                  />
                </Outline>
              ))}
            </CustomTabPanel>
          </TabContext>
        </Box>
      </CenteredDiv>
    </MainContent>
  );
};

export default People;
