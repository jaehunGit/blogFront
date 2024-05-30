import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIcon } from "../actions/Actions";
import { IconContainer } from "../styles/IconContainer.styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const MuiIcon = ({ type, size = "large", color = "gray" }) => {
  const dispatch = useDispatch();
  const activeIcon = useSelector((state) => state.activeIcon);

  const handleClick = () => {
    dispatch(setActiveIcon(type === activeIcon ? null : type)); // 클릭한 아이콘이 이미 활성 상태인 경우, 다시 클릭하면 비활성 상태로 변경
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
      size={size}
      type={type}
      color={activeIcon === type ? "#12B886" : color}
      onClick={handleClick}
    >
      {IconComponent && <IconComponent />}
    </IconContainer>
  );
};

export default MuiIcon;
