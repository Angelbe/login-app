import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, RootState } from "../globalInterfaces";

const initialUserState = {
  value: {} as IUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
