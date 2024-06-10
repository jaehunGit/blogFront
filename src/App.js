import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { setActiveIcon, logout } from "./actions/Actions";
import Home from "./pages/Home";
import People from "./pages/People";
import Review from "./pages/Review";
import Signup from "./pages/Signup";
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

import Login from "./pages/Login.js";

function App() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const activeIcon = useSelector((state) => state.activeIcon);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (activeIcon !== path) {
      dispatch(setActiveIcon(path || "home"));
    }
  }, [dispatch, location.pathname, activeIcon]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  const test = () => {
    navigate("/home");
  };

  return (
    <>
      <GlobalStyles />
      <div
        style={{
          width: "100%",
          height: "90px",
          position: "absolute",
          display: "flex",
          backgroundColor: "white",
          boxShadow: "0px 0px 3px black",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/images/blogLogo.png"
          alt="logo"
          onClick={test}
          style={{
            width: "60px",
            height: "60px",
            marginTop: "12px",
            marginLeft: "30px",
            cursor: "pointer",
          }}
        />
        <div
          style={{
            display: "flex",
            marginRight: "20px",
          }}
        >
          {isAuthenticated ? (
            <>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "30px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {user.nickName}님
              </span>
              <Button
                sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
                variant="text"
                onClick={handleLogoutClick}
              >
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button
                style={{ marginRight: "30px" }}
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
                variant="text"
                onClick={handleLoginClick}
              >
                로그인
              </Button>
              <Button
                sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
                variant="text"
                onClick={handleSignupClick}
              >
                회원가입
              </Button>
            </>
          )}
        </div>
      </div>
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
          <FooterText color="white">@2024 all rights reserved</FooterText>
        </SubContainer1>
        <SubContainer2>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/review" element={<Review />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
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
