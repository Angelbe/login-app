import React, { useEffect, useState } from "react";
import { ECountryKeys } from "src/interfaces/country.interface";
import { getPercentatge, sortCountries } from "./CountryGraph.helpers";
import {
  CountryBar,
  CountryBarText,
  CountryListContainer,
  CountryName,
  ProgressBar,
} from "./CountryGraph.styles";
import { ICountryGraph } from "./CountryGraph.interface";

const CountryGraph: React.FC<ICountryGraph> = ({ countryList, sortValue }) => {
  const [maxValueSorted, setMaxValueSorted] = useState<number>(0);

  useEffect(() => {
    if (countryList.length > 0) {
      setMaxValueSorted(
        Math.max(...countryList.map((country) => country[sortValue] as number))
      );
    }
  }, [sortValue, countryList]);

  return (
    <div>
      {[...countryList]
        .sort((firstCountry, secondCountry) =>
          sortCountries({
            firstCountry: firstCountry[sortValue],
            secondCountry: secondCountry[sortValue],
          })
        )
        .map((country) => {
          const valueSorted = country[sortValue] as number;
          const valueSortedPercentatge = getPercentatge({
            value: valueSorted,
            maxValue: maxValueSorted,
          });
          return (
            <CountryListContainer key={country[ECountryKeys.country]}>
              <CountryName>{country[ECountryKeys.country]}</CountryName>
              <CountryBar>
                <CountryBarText>
                  {valueSorted} ({Math.trunc(valueSortedPercentatge)}%)
                </CountryBarText>
                <ProgressBar width={valueSortedPercentatge} />
              </CountryBar>
            </CountryListContainer>
          );
        })}
    </div>
  );
};

export default CountryGraph;
