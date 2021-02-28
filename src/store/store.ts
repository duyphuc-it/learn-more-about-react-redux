import { configureStore, Store } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
