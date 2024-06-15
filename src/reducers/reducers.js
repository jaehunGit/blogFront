import { LOGIN, LOGOUT, SET_ACTIVE_ICON } from "../actions/Actions";

const initialState = {
  isAuthenticated: false,
  user: null,
  activeIcon: "home",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id: action.payload.id,
          nickName: action.payload.nickName,
          email: action.payload.userEmail,
        },
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
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
