import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setWeather } from "../actions/Actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CenterContainer } from "../styles/CommonStyles.js";
import {
  LogoImage,
  StyledInput,
  PasswordInput,
  LoginButton,
  LinksContainer,
  LinkText,
  FooterTextStyled,
  ErrorMessage,
} from "../styles/LoginStyles.styles.js";
import loginLogo from "../assets/images/loginLogo.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userId: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const tempYn = useSelector((state) => state.user?.tempYn);

  useEffect(() => {
    if (isAuthenticated) {
      if (tempYn === "y") {
        navigate("/changePassword");
      } else {
        navigate("/home");
      }
    }
  }, [isAuthenticated, navigate, tempYn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    axios
      .post("/api/Login", credentials)
      .then((res) => {
        dispatch(login(res.data));
        getGeolocation();
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getAddressFromCoords(latitude, longitude);
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const getAddressFromCoords = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const addressComponents = response.data.results[0].address_components;
      const city = addressComponents[3]?.long_name;
      const district = addressComponents[2]?.long_name;

      const location = `${city} ${district}`;
      getWeather(lat, lng, location);
    } catch (error) {
      console.error("Error getting address from coordinates:", error);
    }
  };

  const getWeather = (lat, lng, location) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
    axios
      .get(weatherUrl)
      .then((res) => {
        const weatherMain = res.data.weather[0].description;
        const weatherIcon = res.data.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

        dispatch(setWeather(location, weatherMain, weatherIconAdrs));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <CenterContainer>
      <LogoImage
        src={loginLogo}
        alt="Logo"
        style={{ width: "200px", height: "100px" }}
      />
      <StyledInput
        type="text"
        name="userId"
        placeholder="아이디"
        value={credentials.userId}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <PasswordInput
        type="password"
        name="password"
        placeholder="비밀번호"
        value={credentials.password}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <div style={{ height: "20px", marginBottom: "10px" }}>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <LinksContainer>
        <LinkText onClick={() => navigate("/FindAccount")}>
          아이디 찾기
        </LinkText>
        <LinkText onClick={() => navigate("/FindAccount")}>
          비밀번호 찾기
        </LinkText>
        <LinkText onClick={() => navigate("/signup")}>회원가입</LinkText>
      </LinksContainer>
      <FooterTextStyled>@2024 all rights reserved</FooterTextStyled>
    </CenterContainer>
  );
};

export default Login;
