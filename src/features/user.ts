// Since I want to reassign parameters in the reducer I allow param reassign here
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EUserKeys, IUser } from "src/interfaces/user.interface";
import { RootState } from "src/interfaces/store.interface";

export const emptyUser: IUser = {
  [EUserKeys.name]: "",
  [EUserKeys.password]: "",
  [EUserKeys.id]: "",
  [EUserKeys.location]: "",
  [EUserKeys.genre]: "",
};

const initialUserState = {
  value: emptyUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.value = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
