import { TConfirmLoggedIn } from "./globalInterfaces";

export const confirmLoggedin: TConfirmLoggedIn = (user) =>
  user.hasOwnProperty("id");
