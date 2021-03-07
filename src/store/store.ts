import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import authenticationReducer from "./authentication/authenticationSlice";
const store = configureStore({
  reducer: {
    theme: themeReducer,
    authentication: authenticationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
