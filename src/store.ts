import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userReducer from "src/features/user";
import { RootState } from "src/interfaces/store.interface";

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
