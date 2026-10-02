import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import logger from "redux-logger";

const loadState = () => {
  try {
    const serialized = localStorage.getItem("reduxState");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch {
    // ignore
  }
};

export const store = createStore(rootReducer, loadState(), applyMiddleware(logger));

store.subscribe(() => saveState(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
