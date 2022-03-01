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

const Dashboard: React.FC<IDashboard> = ({ title }) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [sortValue, setSortValue] = useState<keyof ICountry>("airPollution");

  useEffect(() => {
    getCountries().then((countriesList) => setCountries(countriesList));
  }, []);

  return (
    <DashboardContainer>
      <DashbardTitle>{title}</DashbardTitle>
      <DashboardContent>
        <CountryGraphHeader sortValue={sortValue} setSortValue={setSortValue} />
        <CountryGraph countryList={countries} sortValue={sortValue} />
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
