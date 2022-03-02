import { NextApiRequest, NextApiResponse } from "next";
import { EUserKeys, IUser } from "src/interfaces/user.interface";

let userList: IUser[] = [
  {
    [EUserKeys.name]: "user",
    [EUserKeys.password]: "pass",
    [EUserKeys.id]: "id-1",
    [EUserKeys.genre]: "male",
    [EUserKeys.location]: "Spain",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser | string | undefined>
) {
  if (req.method === "GET") {
    const { user, password } = req.query;

    const userRequested = userList.find(
      ({ name: userName, password: userPassword }) =>
        userName === user && userPassword === password
    );

    if (!userRequested) {
      res.status(401).json("no user found");
    }

    res.status(200).json(userRequested);
  }

  if (req.method === "PUT") {
    const { userEdited } = req.body;

    userList = userList.map((user) => {
      if (user.id === userEdited.id) {
        return userEdited;
      }
      return user;
    });

    res.status(200).json("OK");
  }

  if (req.method === "POST") {
    const { newUser } = req.body;

    userList.push({ ...newUser, id: "id-3" });

    res.status(200).json("OK");
  }
}
