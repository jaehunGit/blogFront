import styled from "styled-components";
import { Button } from "@mui/material";

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  border: ${(props) => (props.$isNew ? "2px solid black" : "none")};
  border-radius: 10px;
  position: relative;
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  visibility: ${(props) => (props.$isEditing ? "hidden" : "visible")};
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  background: transparent;
  font-size: 25px;
`;

export const IconButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseButton = styled(IconButton)`
  top: 5px;
  right: 5px;
`;

export const RotateButton = styled(IconButton)`
  bottom: 5px;
  left: 5px;
`;

export const MoveButton = styled(IconButton)`
  bottom: 5px;
  right: 5px;
`;

export const ActionButtonsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  margin-bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
`;

export const SaveButton = styled(Button)`
  font-size: 20px;
  color: white;
  width: 100px;
`;

export const CancelButton = styled(Button)`
  font-size: 20px;
  color: white;
  width: 100px;
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #202425;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
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

export const SectionTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 400px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CommonButton = styled.button`
  width: 200px;
  padding: 10px 20px;
  background-color: #81d8d0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #70c7bf;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

export const InputLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
  color: #666;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
  font-size: 12px;
  width: 100%;
  min-height: 20px;
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 20px;
  font-size: 12px;
  width: 100%;
  min-height: 20px;
`;
