import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userReducer from "src/features/user";
import countryListReducer from "src/features/countryList";
import { RootState } from "src/interfaces/store.interface";

export const store = configureStore({
  reducer: {
    user: userReducer,
    countryList: countryListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
