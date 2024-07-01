// reducers/rootReducer.js
import {
  LOGIN,
  LOGOUT,
  SET_ACTIVE_ICON,
  SET_WEATHER,
} from "../actions/Actions";

const initialState = {
  isAuthenticated: false,
  user: null,
  activeIcon: "home",
  weather: {
    location: "",
    weatherMain: "",
    weatherIconAdrs: "",
  },
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
          tempYn: action.payload.tempYn,
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
    case SET_WEATHER:
      return {
        ...state,
        weather: {
          location: action.payload.location,
          weatherMain: action.payload.weatherMain,
          weatherIconAdrs: action.payload.weatherIconAdrs,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
