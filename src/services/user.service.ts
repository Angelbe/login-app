import axios from "axios";
import {
  IUser,
  TGetUser,
  TUpdateUser,
  TRegisterUser,
} from "src/interfaces/user.interface";

export const getUser: TGetUser = async ({ userName, password }) => {
  const params = `?user=${userName}&password=${password}`;
  const url = `/api/user${params}`;

  return axios
    .get(url)
    .then((response) => response.data as IUser)
    .catch((error) => error.message);
};

export const updateUser: TUpdateUser = async ({ user }) => {
  const url = `/api/user`;

  return axios
    .put(url, { userEdited: user })
    .then(() => "OK")
    .catch((error) => error.message);
};

export const registerUser: TRegisterUser = async ({ user }) => {
  const url = `/api/user`;

  return axios
    .post(url, { newUser: user })
    .then(() => "OK")
    .catch((error) => error.message);
};
