import { TGetPercentatge, TSortCountries } from "./CountryGraph.interface";

export const sortCountries: TSortCountries = ({
  firstCountry,
  secondCountry,
}) => {
  if (firstCountry < secondCountry) {
    return 1;
  }
  if (firstCountry > secondCountry) {
    return -1;
  }
  return 0;
};

export const getPercentatge: TGetPercentatge = ({ value, maxValue }) =>
  (value * 100) / maxValue;
