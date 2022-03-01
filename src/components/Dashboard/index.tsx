import React, { useEffect, useState } from "react";
import { getCountries } from "src/services/coutry.services";
import { ICountry } from "src/interfaces/country.interface";
import CountryGraph from "src/components/CountryGraph";
import CountryGraphHeader from "src/components/CountryGraphHeader";
import {
  DashboardContent,
  DashboardContainer,
  DashbardTitle,
} from "./Dashboard.styles";
import { IDashboard } from "./Dashboard.interface";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectCountryList, setCountryList } from "../../features/countryList";

const Dashboard: React.FC<IDashboard> = ({ title }) => {
  const dispatch = useAppDispatch();
  const countryList = useAppSelector(selectCountryList);
  const [sortValue, setSortValue] = useState<keyof ICountry>("airPollution");

  useEffect(() => {
    if (countryList.length <= 0) {
      getCountries().then((countriesList) =>
        dispatch(setCountryList(countriesList))
      );
    }
  }, []);

  return (
    <DashboardContainer>
      <DashbardTitle>{title}</DashbardTitle>
      <DashboardContent>
        <CountryGraphHeader sortValue={sortValue} setSortValue={setSortValue} />
        <CountryGraph countryList={countryList} sortValue={sortValue} />
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
