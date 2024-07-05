import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 90px;
  position: absolute;
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 3px black;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 12px;
  margin-left: 30px;
  cursor: pointer;
`;

export const UserContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const UserName = styled.span`
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-weight: bold;
  font-size: 20px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 100px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1000;
`;
export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
