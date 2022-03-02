import React, { useEffect, useState } from "react";
import { getCountries } from "src/services/coutry.services";
import { ECountryKeys, ICountry } from "src/interfaces/country.interface";
import CountryGraph from "src/components/CountryGraph";
import CountryGraphHeader from "src/components/CountryGraphHeader";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { selectCountryList, setCountryList } from "src/features/countryList";
import {
  DashboardContent,
  DashboardContainer,
  DashboardTitle,
} from "./Dashboard.styles";
import { IDashboard } from "./Dashboard.interface";

const Dashboard: React.FC<IDashboard> = ({ title }) => {
  const dispatch = useAppDispatch();
  const countryList = useAppSelector(selectCountryList);
  const [sortValue, setSortValue] = useState<keyof ICountry>(
    ECountryKeys.airPollution
  );

  useEffect(() => {
    if (countryList.length <= 0) {
      getCountries().then((countriesList) =>
        dispatch(setCountryList(countriesList))
      );
    }
  }, []);

  return (
    <DashboardContainer>
      <DashboardTitle>{title}</DashboardTitle>
      <DashboardContent>
        <CountryGraphHeader sortValue={sortValue} setSortValue={setSortValue} />
        <CountryGraph countryList={countryList} sortValue={sortValue} />
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
