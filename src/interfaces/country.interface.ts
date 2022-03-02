export enum ECountryKeys {
  country = "country",
  dwellingsWithoutBasicFacilities = "dwellingsWithoutBasicFacilities",
  housingExpenditure = "housingExpenditure",
  roomsPerPerson = "roomsPerPerson",
  householdNetAdjustedDisposableIncome = "householdNetAdjustedDisposableIncome",
  householdNetFinancialWealth = "householdNetFinancialWealth",
  rmploymentRate = "rmploymentRate",
  jobSecurity = "jobSecurity",
  longTermUnemploymentRate = "longTermUnemploymentRate",
  personalEarnings = "personalEarnings",
  qualityOfSupportNetwork = "qualityOfSupportNetwork",
  educationalAttainment = "educationalAttainment",
  studentSkills = "studentSkills",
  yearsInEducation = "yearsInEducation",
  airPollution = "airPollution",
  waterQuality = "waterQuality",
  consultationOnRuleMaking = "consultationOnRuleMaking",
  voterTurnout = "voterTurnout",
  lifeExpectancy = "lifeExpectancy",
  selfReportedHealth = "selfReportedHealth",
  lifeSatisfaction = "lifeSatisfaction",
  assaultRate = "assaultRate",
  homicideRate = "homicideRate",
  employeesWorkingVeryLongHours = "employeesWorkingVeryLongHours",
  timeDevotedToLeisureAndPersonalCare = "timeDevotedToLeisureAndPersonalCare",
}

export interface ICountryNamesParams {
  name: string;
  countryKey: ECountryKeys;
}

export interface ICountry {
  [ECountryKeys.country]: string;
  [ECountryKeys.dwellingsWithoutBasicFacilities]: number;
  [ECountryKeys.housingExpenditure]: number;
  [ECountryKeys.roomsPerPerson]: number;
  [ECountryKeys.householdNetAdjustedDisposableIncome]: number;
  [ECountryKeys.householdNetFinancialWealth]: number;
  [ECountryKeys.rmploymentRate]: number;
  [ECountryKeys.jobSecurity]: number;
  [ECountryKeys.longTermUnemploymentRate]: number;
  [ECountryKeys.personalEarnings]: number;
  [ECountryKeys.qualityOfSupportNetwork]: number;
  [ECountryKeys.educationalAttainment]: number;
  [ECountryKeys.studentSkills]: number;
  [ECountryKeys.yearsInEducation]: number;
  [ECountryKeys.airPollution]: number;
  [ECountryKeys.waterQuality]: number;
  [ECountryKeys.consultationOnRuleMaking]: number;
  [ECountryKeys.voterTurnout]: number;
  [ECountryKeys.lifeExpectancy]: number;
  [ECountryKeys.selfReportedHealth]: number;
  [ECountryKeys.lifeSatisfaction]: number;
  [ECountryKeys.assaultRate]: number;
  [ECountryKeys.homicideRate]: number;
  [ECountryKeys.employeesWorkingVeryLongHours]: number;
  [ECountryKeys.timeDevotedToLeisureAndPersonalCare]: number;
}

export type TGetCountries = () => Promise<ICountry[]>;
