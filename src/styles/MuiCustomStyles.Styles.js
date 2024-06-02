import styled from "styled-components";

export const TabStyles = {
  borderRadius: "5px",
  "&.Mui-selected": {
    color: "black",
    fontWeight: "bold",
  },
};

export const TabListStyles = {
  borderBottom: 1,
  borderColor: "divider",
};

export const BoxStyles = {
  width: "100%",
  height: "100%",
  typography: "body1",
};

export const TabIndicatorProps = {
  style: {
    backgroundColor: "#12B886",
  },
};

export const ButtonStyles = {
  width: "240px",
  height: "40px",
  color: "white",
  fontSize: "20px",
  borderColor: "white",
  borderRadius: "40px",
  textAlign: "center",
  marginTop: "40px",
  lineHeight: "40px",
  "&:hover": {
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
};

export const CustomTabPanel = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
