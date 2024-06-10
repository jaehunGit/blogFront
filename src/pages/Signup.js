import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  SignupForm,
  StyledInput,
  StyledLabel,
  FormTitle,
  ButtonContainer,
  ErrorMessage,
  SuccessMessage,
  InputContainer,
  InputWrapper,
  CheckButton,
} from "../styles/SignupStyles.styles";
import { Button } from "@mui/material";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    nickName: "",
    email: "",
    verificationCode: "",
  });

  const [userIdValid, setUserIdValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [userIdMessage, setUserIdMessage] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [verifiText, setVerifiText] = useState("인증번호 전송");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isUserIdChecked, setIsUserIdChecked] = useState(false);

  const navigate = useNavigate(); // useNavigate 훅 추가

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "userId") {
      const isValid = /^[A-Za-z\d]{6,20}$/.test(value);
      setUserIdValid(isValid);
      if (!value || value !== formData.userId) {
        setUserIdMessage("");
        setIsUserIdChecked(false);
      }
    }

    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailValid(isValid);
      if (!value || value !== formData.email) {
        setVerificationMessage("");
        setIsEmailVerified(false);
        setVerifiText("인증번호 전송");
      }
    }

    if (name === "password") {
      const isValid =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
          value
        );
      setPasswordValid(isValid);
    }

    if (name === "passwordCheck") {
      setPasswordMatch(value === formData.password);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUserIdChecked) {
      alert("아이디 중복체크를 해주세요.");
      return;
    }
    if (!isEmailVerified) {
      alert("이메일 인증을 해주세요.");
      return;
    }
    if (
      !formData.userId ||
      !formData.password ||
      !formData.passwordCheck ||
      !formData.nickName ||
      !formData.email
    ) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    if (!userIdValid) {
      alert("아이디 형식이 올바르지 않습니다.");
      return;
    }
    if (!passwordValid) {
      alert("비밀번호 형식이 올바르지 않습니다.");
      return;
    }
    if (!passwordMatch) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    axios
      .post("/api/signUpUser", formData)
      .then((res) => {
        alert(res.data.message);

        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckUserId = (e) => {
    e.preventDefault();
    axios
      .get("/api/UserIdConfirm", { params: { userId: formData.userId } })
      .then((res) => {
        setUserIdMessage(res.data.message);
        setIsUserIdChecked(res.data.message === "사용할 수 있는 ID입니다.");
      })
      .catch((err) => {
        setUserIdMessage(err.response.data.message);
        setIsUserIdChecked(false);
      });
  };

  const handleSendVerificationCode = (e) => {
    e.preventDefault();
    setVerifiText("인증번호 재전송");
    setShowVerificationInput(true);
    setTimeLeft(300);
    setFormData({ ...formData, verificationCode: "" });
    alert("인증번호가 전송되었습니다.");
    axios
      .post("/api/sendEmail", { email: formData.email })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    axios
      .get("/api/checkAuthCode", {
        params: {
          email: formData.email,
          requestCode: formData.verificationCode,
        },
      })
      .then((res) => {
        setVerificationMessage(res.data.message);
        setIsEmailVerified(true);
        setShowVerificationInput(false);
      })
      .catch((err) => {
        setVerificationMessage(err.response.data.errorMessage);
        setIsEmailVerified(false);
      });
  };

  useEffect(() => {
    if (showVerificationInput && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showVerificationInput, timeLeft]);

  return (
    <PageContainer>
      <SignupForm onSubmit={handleSubmit}>
        <FormTitle>회원가입</FormTitle>
        <StyledLabel>아이디</StyledLabel>
        <InputWrapper>
          <StyledInput
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            placeholder="아이디"
          />
          <CheckButton
            type="button"
            onClick={handleCheckUserId}
            disabled={!userIdValid}
          >
            중복체크
          </CheckButton>
        </InputWrapper>
        <div style={{ width: "100%", height: "20px" }}>
          {userIdValid === false && (
            <ErrorMessage>
              아이디는 6~20자의 영문과 숫자만 사용 가능합니다.
            </ErrorMessage>
          )}
          {userIdMessage && (
            <div
              style={{
                color:
                  userIdMessage === "사용할 수 있는 ID입니다."
                    ? "green"
                    : "red",
                marginLeft: "100px",
              }}
            >
              {userIdMessage}
            </div>
          )}
        </div>
        <InputContainer>
          <StyledLabel>비밀번호</StyledLabel>
          <StyledInput
            type="password"
            name="password"
            value={formData.userPassword}
            onChange={handleChange}
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
              <SuccessMessage>올바른 형식입니다.</SuccessMessage>
            )}
          </div>
          <StyledLabel>비밀번호 확인</StyledLabel>
          <StyledInput
            type="password"
            name="passwordCheck"
            value={formData.passwordCheck}
            onChange={handleChange}
            placeholder="비밀번호 확인"
          />
          {passwordMatch === false && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
          {passwordMatch === true && (
            <SuccessMessage>비밀번호가 일치합니다.</SuccessMessage>
          )}
        </InputContainer>
        <StyledLabel>닉네임</StyledLabel>
        <StyledInput
          type="text"
          name="nickName"
          value={formData.nickName}
          onChange={handleChange}
          placeholder="닉네임"
        />
        <StyledLabel>이메일</StyledLabel>
        <InputWrapper>
          <StyledInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
          />
          <CheckButton
            type="button"
            onClick={handleSendVerificationCode}
            disabled={!emailValid}
          >
            {verifiText}
          </CheckButton>
        </InputWrapper>
        {showVerificationInput && !isEmailVerified && (
          <>
            <InputWrapper>
              <StyledInput
                type="text"
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleChange}
                placeholder="인증번호"
              />
              <CheckButton type="button" onClick={handleVerifyCode}>
                인증번호 확인
              </CheckButton>
            </InputWrapper>
            <div style={{ marginLeft: "100px" }}>
              입력대기시간{" "}
              <span style={{ color: "red" }}>
                {timeLeft > 0 ? (
                  <>
                    {Math.floor(timeLeft / 60)
                      .toString()
                      .padStart(2, "0")}
                    :{(timeLeft % 60).toString().padStart(2, "0")}
                  </>
                ) : (
                  "인증시간 만료"
                )}
              </span>
            </div>
            {verificationMessage && !isEmailVerified && (
              <div
                style={{
                  marginLeft: "100px",
                  marginTop: "10px",
                  color: "red",
                }}
              >
                {verificationMessage}
              </div>
            )}
          </>
        )}
        {isEmailVerified && (
          <div
            style={{
              marginLeft: "100px",
              marginTop: "10px",
              color: "green",
            }}
          >
            {verificationMessage}
          </div>
        )}
        <ButtonContainer>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            sx={{
              width: "100px",
              marginRight: "10px",
              color: "#81D8D0",
              borderColor: "#81D8D0",
              "&:hover": {
                borderColor: "#81D8D0",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            회원가입
          </Button>
          <Button
            variant="outlined"
            color="primary"
            type="button"
            sx={{
              width: "100px",
              color: "#81D8D0",
              borderColor: "#81D8D0",
              "&:hover": {
                borderColor: "#81D8D0",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            취소
          </Button>
        </ButtonContainer>
      </SignupForm>
    </PageContainer>
  );
};

export default Signup;
