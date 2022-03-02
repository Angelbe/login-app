// Since I want to reassign parameters in the reducer I allow param reassign here
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/interfaces/store.interface";
import { ICountry } from "src/interfaces/country.interface";

const initialUserState = {
  value: [] as ICountry[],
};

export const CountryListSlice = createSlice({
  name: "countryList",
  initialState: initialUserState,
  reducers: {
    setCountryList: (state, action: PayloadAction<ICountry[]>) => {
      state.value = action.payload;
    },
  },
});
export const { setCountryList } = CountryListSlice.actions;
export const selectCountryList = (state: RootState) => state.countryList.value;
export default CountryListSlice.reducer;
