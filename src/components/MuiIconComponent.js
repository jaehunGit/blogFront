import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIcon } from "../actions/Actions";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import { IconContainer } from "../styles/IconContainer.styles";

const MuiIconComponent = ({ type, size = "large", color = "gray" }) => {
  const dispatch = useDispatch();
  const activeIcon = useSelector((state) => state.activeIcon);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setActiveIcon(type));
    navigate(`/${type}`);
  };

  let IconComponent = null;

  switch (type) {
    case "home":
      IconComponent = HomeOutlinedIcon;
      break;
    case "people":
      IconComponent = AssignmentIndOutlinedIcon;
      break;
    case "review":
      IconComponent = RateReviewOutlinedIcon;
      break;
    default:
      break;
  }

  return (
    <IconContainer
      onClick={handleClick}
      size={size}
      $isActive={activeIcon === type}
    >
      {IconComponent && <IconComponent fontSize={size} />}
    </IconContainer>
  );
};

export default MuiIconComponent;
