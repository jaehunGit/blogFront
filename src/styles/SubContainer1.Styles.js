import styled from "styled-components";

export const SubContainer1 = styled.div`
  flex-basis: 25%;
  height: 75vh;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid white;
  border-radius: 200px;
  position: relative;
  overflow: hidden;
`;

export const CircleImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameText = styled.span`
  font-size: 50px;
  font-family: "nanumfontbold";
  color: white;
  letter-spacing: 5px;
  margin-bottom: 15px;
`;

export const RoleText = styled.span`
  font-size: 20px;
  color: white;
  margin-bottom: 20px;
`;

export const GitHubIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const FooterText = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${({ color }) => color};
`;

export default SubContainer1;
