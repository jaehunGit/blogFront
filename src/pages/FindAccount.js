import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CenterContainer,
  FormTitle,
  InputWrapper,
  StyledInput,
  CommonButton,
  SectionTitle,
  Divider,
  InputLabel,
  ButtonContainer,
} from "../styles/CommonStyles";
import axios from "axios";

const FindAccount = () => {
  const [emailForId, setEmailForId] = useState("");
  const [emailForPassword, setEmailForPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailForIdChange = (e) => setEmailForId(e.target.value);
  const handleEmailForPasswordChange = (e) =>
    setEmailForPassword(e.target.value);
  const handleUserIdChange = (e) => setUserId(e.target.value);

  const handleFindId = () => {
    axios
      .get("/api/findId", { params: { email: emailForId } })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      });
  };

  const handleFindPassword = () => {
    axios
      .post("/api/findPassword", { userId, email: emailForPassword })
      .then((res) => {
        alert("해당 이메일로 임시 비밀번호가 발급되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <CenterContainer>
      <FormTitle>아이디/비밀번호 찾기</FormTitle>
      <SectionTitle>아이디 찾기</SectionTitle>
      <InputWrapper>
        <InputLabel>이메일</InputLabel>
        <StyledInput
          type="email"
          name="emailForId"
          value={emailForId}
          onChange={handleEmailForIdChange}
          placeholder="이메일"
          autoComplete="off"
        />
        <ButtonContainer>
          <CommonButton onClick={handleFindId}>아이디 찾기</CommonButton>
        </ButtonContainer>
      </InputWrapper>
      <Divider />
      <SectionTitle>비밀번호 찾기</SectionTitle>
      <InputWrapper>
        <InputLabel>아이디</InputLabel>
        <StyledInput
          type="text"
          name="userId"
          value={userId}
          onChange={handleUserIdChange}
          placeholder="아이디"
          autoComplete="off"
        />
        <InputLabel>이메일</InputLabel>
        <StyledInput
          type="email"
          name="emailForPassword"
          value={emailForPassword}
          onChange={handleEmailForPasswordChange}
          placeholder="이메일"
          autoComplete="off"
        />
        <ButtonContainer>
          <CommonButton onClick={handleFindPassword}>
            비밀번호 찾기
          </CommonButton>
        </ButtonContainer>
      </InputWrapper>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </CenterContainer>
  );
};

export default FindAccount;
