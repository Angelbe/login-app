import { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "src/interfaces/user.interface";

const userList: IUser[] = [
  {
    name: "user",
    password: "pass",
    id: 8,
    genre: "male",
    location: "Spain",
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
}
