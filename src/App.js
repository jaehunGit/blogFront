import React, { useEffect, useState } from "react";
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
import {
  AppContainer,
  Logo,
  UserContainer,
  DropdownMenu,
  DropdownItem,
} from "./styles/AppStyles.styles.js";
import { MainContainer } from "./styles/MainStyles.js";
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
import {
  ButtonStyles,
  dialogStyles,
  textFieldStyles,
  attachFileIconStyles,
  userInfoStyles,
  buttonStyles,
  loginButtonStyles,
} from "./styles/MuiCustomStyles.Styles.js";
import WeatherIcon from "./components/WeatherIcon.js";
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
import FindAccount from "./pages/FindAccount.js";
import Account from "./pages/Account.js";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "./email.js";
import ChangePassword from "./pages/ChangePassword.js";

function App() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    message: "",
  });
  const dispatch = useDispatch();
  const activeIcon = useSelector((state) => state.activeIcon);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const weather = useSelector((state) => state.weather);
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (activeIcon !== path) {
      dispatch(setActiveIcon(path || "home"));
    }

    if (isAuthenticated) {
      setFormData((prevData) => ({
        ...prevData,
        from_name: user.email,
      }));
    }
  }, [dispatch, location.pathname, activeIcon, isAuthenticated, user]);

  const handleClickOpen = () => {
    if (isAuthenticated) {
      setOpen(true);
    } else {
      alert("로그인이 필요한 기능입니다.");
      navigate("/login");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitMail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: user.nickName,
          user_email: formData.from_name,
          message: formData.message,
        },
        USER_ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("메일이 성공적으로 전송되었습니다.");
        setOpen(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("메일 전송에 실패했습니다.");
      });
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

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Logo src="/images/blogLogo.png" alt="logo" onClick={test} />
        <UserContainer>
          {isAuthenticated ? (
            <>
              {weather?.location && weather?.weatherIconAdrs && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>{weather.location}</span>
                  <WeatherIcon
                    weatherIconAdrs={weather.weatherIconAdrs}
                    weatherMain={weather.weatherMain}
                  />
                </div>
              )}
              <span
                style={userInfoStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {user.nickName}님
                {showDropdown && (
                  <DropdownMenu>
                    <DropdownItem onClick={() => navigate("/account")}>
                      프로필 설정
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </span>
              <Button
                sx={buttonStyles}
                variant="text"
                onClick={handleLogoutClick}
              >
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button
                sx={loginButtonStyles}
                variant="text"
                onClick={handleLoginClick}
              >
                로그인
              </Button>
              <Button
                sx={buttonStyles}
                variant="text"
                onClick={handleSignupClick}
              >
                회원가입
              </Button>
            </>
          )}
        </UserContainer>
      </AppContainer>
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
            <Route path="/FindAccount" element={<FindAccount />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/account" element={<Account />} />
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
      <Dialog open={open} onClose={handleClose} sx={dialogStyles}>
        <DialogTitle>Contact Me!</DialogTitle>
        <form onSubmit={handleSubmitMail}>
          <DialogContent>
            <TextField
              margin="dense"
              id="from_name"
              name="from_name"
              label="보내는 사람"
              type="text"
              fullWidth
              variant="standard"
              InputProps={{ sx: textFieldStyles }}
              onChange={handleChange}
              value={formData.from_name}
              required
            />
            <TextField
              margin="dense"
              id="message"
              name="message"
              label="내용"
              type="text"
              fullWidth
              variant="standard"
              multiline
              rows={10}
              placeholder="내용"
              onChange={handleChange}
              value={formData.message}
              required
            />
          </DialogContent>
          <DialogActions>
            <Tooltip
              title={<span style={{ fontSize: "15px" }}>파일 첨부</span>}
              placement="bottom"
              arrow
            >
              <AttachFileIcon sx={attachFileIconStyles} />
            </Tooltip>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button type="submit" color="primary">
              보내기
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default App;
