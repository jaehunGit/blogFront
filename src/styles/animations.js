import { keyframes } from "styled-components";

// 타이핑 애니메이션
export const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

// 깜박임 애니메이션
export const blinkAnimation = keyframes`
0%, 50%, 100% {
    opacity: 1;
}
25%, 75% {
    opacity: 0;
}
`;

// 지우기 애니메이션
export const erasing = keyframes`
  from { width: 100%; }
  to { width: 0; }
`;
