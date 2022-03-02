import {
  ECountryKeys,
  ICountryNamesParams,
} from "src/interfaces/country.interface";

export const countryNamesParams: ICountryNamesParams[] = [
  {
    name: "Dwellings without basic facilities",
    countryKey: ECountryKeys.dwellingsWithoutBasicFacilities,
  },
  { name: "Housing expenditure", countryKey: ECountryKeys.housingExpenditure },
  { name: "Rooms per person", countryKey: ECountryKeys.roomsPerPerson },
  {
    name: "Household net adjusted disposable income",
    countryKey: ECountryKeys.householdNetAdjustedDisposableIncome,
  },
  {
    name: "Household net financial wealth",
    countryKey: ECountryKeys.householdNetFinancialWealth,
  },
  { name: "Employment Rate", countryKey: ECountryKeys.rmploymentRate },
  { name: "Job security", countryKey: ECountryKeys.jobSecurity },
  {
    name: "Long term unemployment rate",
    countryKey: ECountryKeys.longTermUnemploymentRate,
  },
  { name: "Personal earnings", countryKey: ECountryKeys.personalEarnings },
  {
    name: "Quality of support network",
    countryKey: ECountryKeys.qualityOfSupportNetwork,
  },
  {
    name: "Educational attainment",
    countryKey: ECountryKeys.educationalAttainment,
  },
  { name: "Student skills", countryKey: ECountryKeys.studentSkills },
  { name: "Years in education", countryKey: ECountryKeys.yearsInEducation },
  { name: "Air pollution", countryKey: ECountryKeys.airPollution },
  { name: "Water quality", countryKey: ECountryKeys.waterQuality },
  {
    name: "Consultation on rule making",
    countryKey: ECountryKeys.consultationOnRuleMaking,
  },
  { name: "Voter turnout", countryKey: ECountryKeys.voterTurnout },
  { name: "Life expectancy", countryKey: ECountryKeys.lifeExpectancy },
  { name: "Self Reported health", countryKey: ECountryKeys.selfReportedHealth },
  { name: "Life satisfaction", countryKey: ECountryKeys.lifeSatisfaction },
  { name: "Assault rate", countryKey: ECountryKeys.assaultRate },
  { name: "Homicide rate", countryKey: ECountryKeys.homicideRate },
  {
    name: "Employees working very long Hours",
    countryKey: ECountryKeys.employeesWorkingVeryLongHours,
  },
  {
    name: "Time devoted to leisure and personalcare",
    countryKey: ECountryKeys.timeDevotedToLeisureAndPersonalCare,
  },
];
