import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  currentTheme: string;
}

const initialState: ThemeState = {
  currentTheme: "DEFAULT",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
    },
  },
});

const { actions, reducer } = themeSlice;
export const { updateTheme } = actions;

export default reducer;
