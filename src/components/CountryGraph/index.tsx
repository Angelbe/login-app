import React, { useEffect, useState } from "react";
import { getPercentatge, sortCountries } from "./CountryGraph.helpers";
import {
  CountryBar,
  CountryBarText,
  CountryListContainer,
  CountryName,
  ProgressBar,
} from "./CountryGraph.styles";
import { ICountry } from "../../interfaces/country.interface";

interface ICountryGraph {
  countryList: ICountry[];
  sortValue: keyof ICountry;
}

const CountryGraph: React.FC<ICountryGraph> = ({ countryList, sortValue }) => {
  const [maxValueSorted, setMaxValueSorted] = useState(0);

  useEffect(() => {
    if (countryList.length > 0) {
      setMaxValueSorted(
        Math.max(...countryList.map((country) => country[sortValue] as number))
      );
    }
  }, [sortValue, countryList]);

  return (
    <div>
      {countryList
        .sort((firstCountry, secondCountry) =>
          sortCountries({
            firstCountry: firstCountry[sortValue] as number,
            secondCountry: secondCountry[sortValue] as number,
          })
        )
        .map(({ country, ...countryParams }) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const valueSorted = countryParams[sortValue];
          const valueSortedPercentatge = getPercentatge({
            value: valueSorted,
            maxValue: maxValueSorted,
          });
          return (
            <CountryListContainer key={country}>
              <CountryName>{country}</CountryName>
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
