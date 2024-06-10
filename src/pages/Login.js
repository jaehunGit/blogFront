import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { login } from "../actions/Actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    console.log(12313);
    axios
      .post("/api/Login", credentials)
      .then((res) => {
        const { nickName, userEmail } = res.data; // 서버에서 받은 데이터 구조에 맞게 수정
        dispatch(login({ nickName, userEmail }));
        setErrorMessage("");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <LoginContainer>
      <LogoImage src="/images/blogLogo.png" alt="Logo" />
      <StyledInput
        type="text"
        name="userId"
        placeholder="아이디"
        value={credentials.userId}
        onChange={handleChange}
      />
      <PasswordInput
        type="password"
        name="password"
        placeholder="비밀번호"
        value={credentials.password}
        onChange={handleChange}
      />
      <div style={{ height: "20px", marginBottom: "10px" }}>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <LinksContainer>
        <LinkText>아이디 찾기</LinkText>
        <LinkText>비밀번호 찾기</LinkText>
        <LinkText onClick={() => navigate("/signup")}>회원가입</LinkText>
      </LinksContainer>
      <FooterTextStyled>@2024 all rights reserved</FooterTextStyled>
    </LoginContainer>
  );
};

export default Login;
