import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  CenterContainer,
  FormTitle,
  InputWrapper,
  StyledInput,
  InputLabel,
  CommonButton,
  SuccessMessage,
  ErrorMessage,
  ButtonContainer,
} from "../styles/CommonStyles";

const ChangePassword = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(null);

  useEffect(() => {
    if (!user || user.tempYn !== "y") {
      navigate("/home");
    }
  }, [user, navigate]);

  useEffect(() => {
    setPasswordMatch(password === passwordCheck);
  }, [password, passwordCheck]);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const isValid =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
        value
      );
    setPasswordValid(isValid);
  };

  const handlePasswordCheckChange = (e) => {
    const value = e.target.value;
    setPasswordCheck(value);
  };

  const handleSubmit = () => {
    if (passwordValid && passwordMatch) {
      axios
        .post("/api/changePassword", {
          userId: user.id,
          password: password,
        })
        .then((response) => {
          console.log("Password changed successfully");
          navigate("/home");
        })
        .catch((error) => {
          console.log("Failed to change password", error);
        });
    } else {
      console.log(user);
      alert("비밀번호 형식이 올바르지 않거나, 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <CenterContainer>
      <FormTitle>비밀번호 변경</FormTitle>
      <InputWrapper>
        <InputLabel>비밀번호 입력</InputLabel>
        <StyledInput
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호"
        />
        <div style={{ width: "100%", height: "20px" }}>
          {passwordValid === false && (
            <ErrorMessage>
              8~20자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를
              입력해주세요.
            </ErrorMessage>
          )}
          {passwordValid === true && (
            <SuccessMessage>올바른 비밀번호 형식입니다.</SuccessMessage>
          )}
        </div>
        <InputLabel>비밀번호 확인</InputLabel>
        <StyledInput
          type="password"
          name="passwordCheck"
          value={passwordCheck}
          onChange={handlePasswordCheckChange}
          placeholder="비밀번호 확인"
        />
        <div style={{ width: "100%", height: "20px" }}>
          {passwordMatch === false && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
          {passwordMatch === true && (
            <SuccessMessage>비밀번호가 일치합니다.</SuccessMessage>
          )}
        </div>
        <ButtonContainer>
          <CommonButton onClick={handleSubmit}>비밀번호 변경</CommonButton>
        </ButtonContainer>
      </InputWrapper>
    </CenterContainer>
  );
};

export default ChangePassword;
