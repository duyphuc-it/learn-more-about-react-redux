import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    updateStatusPending(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

const { actions, reducer } = loadingSlice;
export const { updateStatusPending } = actions;

export default reducer;
