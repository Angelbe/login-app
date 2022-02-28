import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userReducer from "./actions/user";
import { RootState } from "./globalInterfaces";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
