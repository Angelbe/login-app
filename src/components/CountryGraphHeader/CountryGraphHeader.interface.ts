import { ICountry } from "src/interfaces/country.interface";
import React from "react";

export interface ICountryGraphHeader {
  sortValue: keyof ICountry;
  setSortValue: React.Dispatch<React.SetStateAction<keyof ICountry>>;
}
