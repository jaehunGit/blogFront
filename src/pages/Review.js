import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Rnd } from "react-rnd";
import axios from "axios";
import {
  CenterContainer,
  StyledImage,
  FormContainer,
  TextArea,
  CloseButton,
  RotateButton,
  MoveButton,
  ActionButtonsContainer,
  SaveButton,
  CancelButton,
  Tooltip,
} from "../styles/CommonStyles";
import { Button } from "@mui/material";
import test1 from "../assets/images/mokokoBackGround.png";
import CloseIcon from "@mui/icons-material/Close";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import OpenWithIcon from "@mui/icons-material/OpenWith";

const Review = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    top: "0px",
    left: "0px",
    width: "300px",
    height: "150px",
    rotate: 0,
    text: "",
  });
  const [reviews, setReviews] = useState([]);
  const [isRotating, setIsRotating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState({});
  const [editingReview, setEditingReview] = useState(null);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const initialMousePos = useRef({ x: 0, y: 0 });
  const initialRotate = useRef(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("/api/reviews");
      if (response.data) {
        setReviews(response.data);
        const initialTooltipState = response.data.reduce((acc, review) => {
          acc[review.id] = false;
          return acc;
        }, {});
        setTooltipVisible(initialTooltipState);
      }
    } catch (error) {
      console.error("Failed to fetch reviews", error);
    }
  };

  const handleOpenForm = () => {
    if (!user || !user.id) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
    setFormData({
      top: "0px",
      left: "0px",
      width: "300px",
      height: "150px",
      rotate: 0,
      text: "",
    });
    setEditingReview(null);
  };

  const handleSaveForm = () => {
    const textarea = document.createElement("textarea");
    textarea.style.fontSize = "25px";
    textarea.style.visibility = "hidden";
    textarea.style.position = "absolute";
    document.body.appendChild(textarea);
    textarea.value = formData.text;
    textarea.style.width = "auto";
    textarea.style.height = "auto";
    const newWidth = textarea.scrollWidth + 20 + "px";
    const newHeight = textarea.scrollHeight + 20 + "px";
    document.body.removeChild(textarea);

    const dataToSend = {
      ...formData,
      width: newWidth,
      height: newHeight,
      userId: user.id,
      nickName: user.nickName,
    };

    axios
      .post("/api/reviewSave", dataToSend)
      .then((response) => {
        setFormVisible(false);
        alert("작성완료!");
        setFormData({
          top: "0px",
          left: "0px",
          width: "300px",
          height: "150px",
          rotate: 0,
          text: "",
        });
        fetchReviews();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleMouseDownRotate = (e) => {
    e.preventDefault();
    initialMousePos.current = { x: e.clientX, y: e.clientY };
    initialRotate.current = formData.rotate;
    setIsRotating(true);
  };

  const handleMouseDownDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMoveDrag = (e) => {
    if (!isDragging) return;
    const dx = e.movementX;
    const dy = e.movementY;
    requestAnimationFrame(() => {
      setFormData((prevData) => ({
        ...prevData,
        left: `${parseInt(prevData.left, 10) + dx}px`,
        top: `${parseInt(prevData.top, 10) + dy}px`,
      }));
    });
  };

  const handleMouseUpDrag = () => {
    setIsDragging(false);
  };

  const handleEditReview = (review) => {
    setFormVisible(true);
    setFormData({
      ...review,
      text: review.text,
      left: `${review.left}px`,
      top: `${review.top}px`,
    });
    setEditingReview(review.id);
  };

  const handleDeleteReview = (reviewId) => {
    axios
      .post("/api/reviewDelete", { id: reviewId })
      .then((response) => {
        alert(response.data.message);
        fetchReviews();
      })
      .catch((error) => {
        console.log(error.response.data.errorMessage);
      });
  };

  useEffect(() => {
    const handleMouseMoveRotate = (e) => {
      if (!isRotating) return;
      const dy = initialMousePos.current.y - e.clientY;
      const newRotate = initialRotate.current + dy * 0.5;
      setFormData((prevData) => ({
        ...prevData,
        rotate: newRotate,
      }));
    };

    const handleMouseUpRotate = () => {
      setIsRotating(false);
    };

    if (isRotating) {
      window.addEventListener("mousemove", handleMouseMoveRotate);
      window.addEventListener("mouseup", handleMouseUpRotate);
    } else {
      window.removeEventListener("mousemove", handleMouseMoveRotate);
      window.removeEventListener("mouseup", handleMouseUpRotate);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveRotate);
      window.removeEventListener("mouseup", handleMouseUpRotate);
    };
  }, [isRotating]);

  useEffect(() => {
    if (!user || !user.id) {
      setFormVisible(false);
    }
  }, [user]);

  return (
    <CenterContainer ref={containerRef}>
      <StyledImage src={test1} alt="모코코" />
      {reviews.map((review) => (
        <Rnd
          key={review.id}
          disableDragging
          enableResizing={false}
          size={{ width: review.width, height: review.height }}
          position={{
            x: parseInt(review.left, 10),
            y: parseInt(review.top, 10),
          }}
        >
          <FormContainer
            rotate={review.rotate}
            $isNew={false}
            $isEditing={editingReview === review.id}
            onMouseEnter={() =>
              setTooltipVisible({ ...tooltipVisible, [review.id]: true })
            }
            onMouseLeave={() =>
              setTooltipVisible({ ...tooltipVisible, [review.id]: false })
            }
          >
            <TextArea value={review.text} readOnly />
            <Tooltip $show={tooltipVisible[review.id]}>
              {review.nickName}
            </Tooltip>
            {review.userId === user?.id &&
              formVisible &&
              (editingReview === review.id ? (
                <ActionButtonsContainer>
                  <Button
                    onClick={() => handleEditReview(review)}
                    variant="contained"
                    sx={{
                      backgroundColor: "#ff6961",
                      "&:hover": {
                        backgroundColor: "#ff6961",
                      },
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    수정
                  </Button>
                  <Button
                    onClick={() => handleDeleteReview(review.id)}
                    variant="contained"
                    sx={{
                      backgroundColor: "#29353F",
                      "&:hover": {
                        backgroundColor: "#29353F",
                      },
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    삭제
                  </Button>
                </ActionButtonsContainer>
              ) : (
                editingReview === null && (
                  <ActionButtonsContainer>
                    <Button
                      onClick={() => handleEditReview(review)}
                      variant="contained"
                      sx={{
                        backgroundColor: "#ff6961",
                        "&:hover": {
                          backgroundColor: "#ff6961",
                        },
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      수정
                    </Button>
                    <Button
                      onClick={() => handleDeleteReview(review.id)}
                      variant="contained"
                      sx={{
                        backgroundColor: "#29353F",
                        "&:hover": {
                          backgroundColor: "#29353F",
                        },
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      삭제
                    </Button>
                  </ActionButtonsContainer>
                )
              ))}
          </FormContainer>
        </Rnd>
      ))}
      {!formVisible && (
        <Button
          sx={{
            position: "absolute",
            color: "white",
            fontSize: "20px",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#ff6961",
            "&:hover": {
              backgroundColor: "#ff6961",
            },
          }}
          onClick={handleOpenForm}
        >
          글 남기기
        </Button>
      )}
      {formVisible && (
        <Rnd
          disableDragging
          enableResizing={!isRotating}
          size={{ width: formData.width, height: formData.height }}
          position={{
            x: parseInt(formData.left, 10),
            y: parseInt(formData.top, 10),
          }}
          onDragStop={(e, d) => {
            setFormData((prevData) => ({
              ...prevData,
              left: `${d.x}px`,
              top: `${d.y}px`,
            }));
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            const newHeight =
              Math.max(ref.style.height, ref.scrollHeight) + "px";
            const newWidth = Math.max(ref.style.width, ref.scrollWidth) + "px";
            setFormData((prevData) => ({
              ...prevData,
              width: newWidth,
              height: newHeight,
              ...position,
            }));
          }}
        >
          <FormContainer
            rotate={formData.rotate}
            onMouseMove={handleMouseMoveDrag}
            onMouseUp={handleMouseUpDrag}
            $isNew={true}
          >
            <TextArea
              value={formData.text}
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
            />
            <CloseButton onClick={handleCloseForm}>
              <CloseIcon />
            </CloseButton>
            <RotateButton onMouseDown={handleMouseDownRotate}>
              <RotateLeftIcon />
            </RotateButton>
            <MoveButton
              onMouseDown={handleMouseDownDrag}
              onMouseUp={handleMouseUpDrag}
            >
              <OpenWithIcon />
            </MoveButton>
          </FormContainer>
        </Rnd>
      )}
      {formVisible && (
        <ActionButtonsContainer>
          <SaveButton
            sx={{
              backgroundColor: "#ff6961",
              "&:hover": {
                backgroundColor: "#ff6961",
              },
            }}
            onClick={handleSaveForm}
            variant="contained"
          >
            저장
          </SaveButton>
          <CancelButton
            sx={{
              backgroundColor: "#29353F",
              "&:hover": {
                backgroundColor: "#29353F",
              },
            }}
            onClick={handleCloseForm}
            variant="contained"
          >
            취소
          </CancelButton>
        </ActionButtonsContainer>
      )}
    </CenterContainer>
  );
};

export default Review;
