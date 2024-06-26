import styled from "styled-components";

export const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const PasswordInput = styled(StyledInput)`
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 45px;
  background-color: #81d8d0;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export const LinkText = styled.span`
  cursor: pointer;
  font-size: 12px;
  color: #81d8d0;
`;

export const FooterTextStyled = styled.div`
  position: absolute;
  bottom: 30px;
  color: black;
  font-size: 12px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
  font-size: 14px;
`;
