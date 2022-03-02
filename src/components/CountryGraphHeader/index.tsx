import React, { useMemo } from "react";
import { ICountry } from "src/interfaces/country.interface";
import { countryNamesParams } from "./CountryGraphHeader.variables";
import { ICountryGraphHeader } from "./CountryGraphHeader.interface";
import {
  CountryGraphHeaderContainer,
  SelectCountryParam,
} from "./CountryGraphHeader.styles";

const CountryGraphHeader: React.FC<ICountryGraphHeader> = ({
  sortValue,
  setSortValue,
}) => {
  const nameOfSortedValue: string | undefined = useMemo(
    () =>
      countryNamesParams.find((country) => country.countryKey === sortValue)
        ?.name,
    [sortValue]
  );

  return (
    <CountryGraphHeaderContainer>
      <h3>Countries sorted by: {nameOfSortedValue}</h3>
      <div>
        Change sort value:
        <SelectCountryParam
          onChange={(event) =>
            setSortValue(event.target.value as keyof ICountry)
          }
          value={sortValue}
        >
          {countryNamesParams.map(({ name, countryKey }) => (
            <option key={countryKey} value={countryKey}>
              {name}
            </option>
          ))}
        </SelectCountryParam>
      </div>
    </CountryGraphHeaderContainer>
  );
};

export default CountryGraphHeader;
