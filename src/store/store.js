import { createStore } from "redux";
import rootReducer from "../reducers/reducers";

// 로컬 스토리지에서 상태를 로드하는 함수
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined; // 저장된 상태가 없으면 undefined 반환 (기본 초기 상태 사용)
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
};

// 상태를 로컬 스토리지에 저장하는 함수
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};

// 로컬 스토리지에서 상태를 로드
const persistedState = loadState();

// 스토어 생성 시 로컬 스토리지에서 로드한 상태를 초기 상태로 사용
const store = createStore(
  rootReducer,
  persistedState || undefined // 기본 상태를 설정하고 로드된 상태를 병합
);

// 상태가 변경될 때마다 로컬 스토리지에 상태 저장
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
