import React from "react";
import { ICountry } from "src/interfaces/country.interface";
import { countryParams } from "./CountryGraphHeader.variables";
import { ICountryGraphHeader } from "./CountryGraphHeader.interface";
import {
  CountryGraphHeaderContainer,
  SelectCountryParam,
} from "./CountryGraphHeader.styles";

const CountryGraphHeader: React.FC<ICountryGraphHeader> = ({
  sortValue,
  setSortValue,
}) => (
  <CountryGraphHeaderContainer>
    <h3>Countries sorted by: {sortValue}</h3>
    <div>
      Change sort value:
      <SelectCountryParam
        onChange={(event) => setSortValue(event.target.value as keyof ICountry)}
      >
        {countryParams.map((param) => (
          <option key={param} value={param}>
            {param}
          </option>
        ))}
      </SelectCountryParam>
    </div>
  </CountryGraphHeaderContainer>
);

export default CountryGraphHeader;
