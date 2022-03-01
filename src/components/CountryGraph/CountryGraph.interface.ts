export interface ICountryBar {
  width: number;
}

export interface ISortCountries {
  firstCountry: number;
  secondCountry: number;
}

export interface IGetPercentatge {
  value: number;
  maxValue: number;
}

export type TSortCountries = (param: ISortCountries) => number;
export type TGetPercentatge = (param: IGetPercentatge) => number;
