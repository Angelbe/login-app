import axios from "axios";
import { TGetCountries } from "../interfaces/country.interface";

export const getCountries: TGetCountries = async () => {
  const url = `https://run.mocky.io/v3/eed75d37-b80c-4194-b945-a6b5e7819f32`;

  return axios.get(url).then(({ data }) => data);
};
