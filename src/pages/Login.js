import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/Actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LogoImage,
  StyledInput,
  PasswordInput,
  LoginButton,
  LinksContainer,
  LinkText,
  FooterTextStyled,
  ErrorMessage,
} from "../styles/LoginStyles.styles.js";

import testimage from "../assets/images/loginLogo.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userId: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    axios
      .post("/api/Login", credentials)
      .then((res) => {
        dispatch(login(res.data));
        setErrorMessage("");
        navigate("/home");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <LoginContainer>
      <LogoImage
        src={testimage}
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
        <LinkText>아이디 찾기</LinkText>
        <LinkText>비밀번호 찾기</LinkText>
        <LinkText>회원가입</LinkText>
      </LinksContainer>
      <FooterTextStyled>@2024 all rights reserved</FooterTextStyled>
    </LoginContainer>
  );
};

export default Login;
