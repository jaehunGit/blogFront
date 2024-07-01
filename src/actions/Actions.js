// actions/Actions.js
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_ACTIVE_ICON = "SET_ACTIVE_ICON";
export const SET_WEATHER = "SET_WEATHER";

export const login = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setActiveIcon = (iconType) => ({
  type: SET_ACTIVE_ICON,
  payload: iconType,
});

export const setWeather = (location, weatherMain, weatherIconAdrs) => ({
  type: SET_WEATHER,
  payload: { location, weatherMain, weatherIconAdrs },
});
