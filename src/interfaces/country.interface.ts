export interface ICountry {
  country: string;
  dwellingsWithoutBasicFacilities: number;
  housingExpenditure: number;
  roomsPerPerson: number;
  householdNetAdjustedDisposableIncome: number;
  householdNetFinancialWealth: number;
  rmploymentRate: number;
  jobSecurity: number;
  longTermUnemploymentRate: number;
  personalEarnings: number;
  qualityOfSupportNetwork: number;
  educationalAttainment: number;
  studentSkills: number;
  yearsInEducation: number;
  airPollution: number;
  waterQuality: number;
  consultationOnRuleMaking: number;
  voterTurnout: number;
  lifeExpectancy: number;
  selfReportedHealth: number;
  lifeSatisfaction: number;
  assaultRate: number;
  homicideRate: number;
  employeesWorkingVeryLongHours: number;
  timeDevotedToLeisureAndPersonalCare: number;
}

export type TGetCountries = () => Promise<ICountry[]>;
