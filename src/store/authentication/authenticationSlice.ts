import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "types/User";

export interface AuthState {
  authenticated: Boolean;
}

const initialState: AuthState = {
  authenticated: false,
};

export const login = createAsyncThunk(
  "authentication/login",
  async (test: boolean, thunkApi) => {
    // if (test) {
    //   return Promise.resolve({
    //     id: 1,
    //     name: "Phạm Duy Phúc",
    //   } as User);
    // }
    // return Promise.reject(thunkApi.rejectWithValue("Có lỗi xảy ra"));
    try {
      throw "Co loi xay ra";
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [`${login.rejected}`]: (state, actions: PayloadAction<any>) => {
      console.log(actions.payload);
    },
    [`${login.fulfilled}`]: (state, actions: PayloadAction<string>) => {
      console.log(actions.payload);
    },
  },
});

const { actions, reducer } = authenticationSlice;

export default reducer;
