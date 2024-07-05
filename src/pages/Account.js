import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { updateNickname } from "../actions/Actions"; // 액션 임포트
import {
  CenterContainer,
  FormTitle,
  InputWrapper,
  StyledInput,
  CommonButton,
  SectionTitle,
  InputLabel,
  ButtonContainer,
  ErrorMessage,
  SuccessMessage,
} from "../styles/CommonStyles";

const Account = () => {
  const [nickName, setNickName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(null);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNickNameChange = (e) => setNickName(e.target.value);
  const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    const isValid =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
        value
      );
    setPasswordValid(isValid);
    setPasswordMatch(value === newPasswordCheck);
  };
  const handleNewPasswordCheckChange = (e) => {
    const value = e.target.value;
    setNewPasswordCheck(value);
    setPasswordMatch(value === newPassword);
  };

  const handleNickNameSubmit = () => {
    if (nickName) {
      axios
        .post("/api/updateNickName", { userId: user.id, nickName })
        .then((res) => {
          alert(res.data.message);
          dispatch(updateNickname(nickName));
          navigate("/home");
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    } else {
      alert("닉네임을 입력해주세요.");
    }
  };

  const handlePasswordSubmit = () => {
    if (currentPassword && newPassword && newPasswordCheck) {
      if (passwordValid && passwordMatch) {
        axios
          .post("/api/updatePassword", {
            userId: user.id,
            currentPassword,
            newPassword,
          })
          .then((res) => {
            alert(res.data.message);
            navigate("/home");
          })
          .catch((err) => {
            alert(err.response.data.errorMessage);
          });
      } else {
        alert("비밀번호 형식이 올바르지 않거나, 비밀번호가 일치하지 않습니다.");
      }
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  };

  return (
    <>
      <CenterContainer>
        <FormTitle>계정 설정</FormTitle>
        <SectionTitle>닉네임 변경</SectionTitle>
        <InputWrapper>
          <InputLabel>닉네임</InputLabel>
          <StyledInput
            type="text"
            name="nickName"
            value={nickName}
            onChange={handleNickNameChange}
            placeholder="닉네임"
          />
          <ButtonContainer>
            <CommonButton onClick={handleNickNameSubmit}>
              닉네임 변경
            </CommonButton>
          </ButtonContainer>
        </InputWrapper>
        <SectionTitle>비밀번호 변경</SectionTitle>
        <InputWrapper>
          <InputLabel>현재 비밀번호 입력</InputLabel>
          <StyledInput
            type="password"
            name="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            placeholder="현재 비밀번호"
          />
          <InputLabel>새 비밀번호</InputLabel>
          <StyledInput
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder="새 비밀번호"
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
          <InputLabel>새 비밀번호 확인</InputLabel>
          <StyledInput
            type="password"
            name="newPasswordCheck"
            value={newPasswordCheck}
            onChange={handleNewPasswordCheckChange}
            placeholder="새 비밀번호 확인"
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
            <CommonButton onClick={handlePasswordSubmit}>
              비밀번호 변경
            </CommonButton>
          </ButtonContainer>
        </InputWrapper>
      </CenterContainer>
    </>
  );
};

export default Account;
