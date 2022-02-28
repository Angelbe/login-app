import axios from "axios";
import { IUser } from "src/interfaces/user.interface";

interface IGetUser {
  userName: string;
  password: string;
}

type TGetUser = (param: IGetUser) => Promise<IUser>;

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
