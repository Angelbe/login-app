import { ECountryKeys, ICountry } from "src/interfaces/country.interface";

export interface ICountryBar {
  width: number;
}

export interface ISortCountries {
  firstCountry: number | string;
  secondCountry: number | string;
}

export interface IGetPercentatge {
  value: number;
  maxValue: number;
}

export interface ICountryGraph {
  countryList: ICountry[];
  sortValue: ECountryKeys;
}

export type TSortCountries = (param: ISortCountries) => number;
export type TGetPercentatge = (param: IGetPercentatge) => number;
