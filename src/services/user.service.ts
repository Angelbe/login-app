import axios from "axios";
import { IUser, TGetUser } from "src/interfaces/user.interface";

export const getUser: TGetUser = async ({ userName, password }) => {
  const params = `?user=${userName}&password=${password}`;
  const url = `/api/user${params}`;
  const headers = { "content-type": "application/json" };

  return axios({
    method: "get",
    url,
    headers,
  })
    .then((response) => response.data as IUser)
    .catch((error) => error.message);
};
