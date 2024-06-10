import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  box-sizing: border-box;
`;

export const SignupForm = styled.form`
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #81848f;
  font-size: 12px;
`;

export const FormTitle = styled.div`
  font-size: 40px;
  font-family: nanumfontbold;
  text-align: center;
  margin-bottom: 50px;
  color: #606b75;
  border-bottom: 1px solid #ededed;
  padding: 50px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  margin-left: 100px;
`;

export const StyledInput = styled.input`
  height: 40px;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  width: 400px;
  box-sizing: border-box;
  margin-left: 100px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: 40px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  align-self: flex-start;
  margin-left: 100px;
  min-height: 16px;
  margin-bottom: 5px;
`;

export const SuccessMessage = styled.div`
  color: green;
  font-size: 12px;
  align-self: flex-start;
  margin-left: 100px;
  min-height: 16px;
  margin-bottom: 5px;
`;

export const InputContainer = styled.div`
  align-items: center;
  min-height: 180px;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: calc(100% - 100px);
`;

export const CheckButton = styled.button`
  position: absolute;
  right: 0;
  top: 20px;
  transform: translateY(-50%);
  width: 110px;
  height: 40px;
  background-color: #81d8d0;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #70c7bf;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
