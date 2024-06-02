import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { setActiveIcon } from "./actions/Actions";
import Home from "./pages/Home";
import People from "./pages/People";
import Review from "./pages/Review";
import GlobalStyles from "./styles/GlobalStyles.styles";
import MainContainer from "./styles/MainContainer.styles";
import {
  SubContainer1,
  ImageContainer,
  CircleImageWrapper,
  CircleImage,
  InfoContainer,
  NameText,
  RoleText,
  GitHubIcon,
  FooterText,
} from "./styles/SubContainer1.Styles";
import SubContainer2 from "./styles/SubContainer2.Styles";
import NavigationBar from "./styles/NavigationBar.styles";
import NavButton from "./styles/NavButton.Styles";
import MuiIcon from "./components/MuiIconComponent.js";
import { ButtonStyles } from "./styles/MuiCustomStyles.Styles.js";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Tooltip from "@mui/material/Tooltip";

function App() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const activeIcon = useSelector((state) => state.activeIcon);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1); // 현재 경로에서 '/' 제거
    if (activeIcon !== path) {
      dispatch(setActiveIcon(path || "home")); // 기본값이 'home'
    }
  }, [dispatch, location.pathname, activeIcon]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <SubContainer1>
          <ImageContainer>
            <CircleImageWrapper>
              <CircleImage src="/images/image.png" alt="다다" />
            </CircleImageWrapper>
          </ImageContainer>
          <InfoContainer>
            <NameText>정 재 훈</NameText>
            <RoleText>Front Developer</RoleText>
            <a href="https://github.com/jaehunGit?tab=repositories">
              <GitHubIcon src="/images/github.png" alt="githubIcon" />
            </a>

            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              sx={ButtonStyles}
              onClick={handleClickOpen}
            >
              Contact Me
            </Button>
          </InfoContainer>
          <FooterText>@2024 all rights reserved</FooterText>
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
          <MuiIcon type="home" size="large" color="gray" />
        </NavButton>
        <NavButton>
          <MuiIcon type="people" size="large" color="gray" />
        </NavButton>
        <NavButton>
          <MuiIcon type="review" size="large" color="gray" />
        </NavButton>
      </NavigationBar>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          m: 0,
          "& .MuiDialog-paper": {
            margin: 0,
            width: "600px",
            maxHeight: "100vh",
          },
        }}
      >
        <DialogTitle>새 메일</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="받는 사람"
            type="email"
            fullWidth
            variant="standard"
            defaultValue="ghty6323@gmail.com"
            InputProps={{
              readOnly: true,
              sx: { fontSize: "18px" },
            }}
          />
          <TextField
            margin="dense"
            id="message"
            type="text"
            fullWidth
            variant="standard"
            multiline
            rows={10}
            placeholder={"내용"}
          />
        </DialogContent>
        <DialogActions>
          <Tooltip
            title={<span style={{ fontSize: "15px" }}>파일 첨부</span>}
            placement="top"
            arrow
          >
            <AttachFileIcon
              sx={{ fontSize: "28px", cursor: "pointer", marginRight: "auto" }}
            />
          </Tooltip>

          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleClose} color="primary">
            보내기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
