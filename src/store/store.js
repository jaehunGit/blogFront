import { createStore } from "redux";
import rootReducer from "../reducers/reducers";

const initialState = {
  activeIcon: "home",
};

const store = createStore(rootReducer, initialState);

export default store;
