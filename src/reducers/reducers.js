import { SET_ACTIVE_ICON } from "../actions/Actions";

const initialState = {
  activeIcon: null,
};

// 리듀서 함수 정의
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_ICON:
      return {
        ...state,
        activeIcon: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
