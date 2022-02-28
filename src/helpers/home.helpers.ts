import { TConfirmLoggedIn } from "src/interfaces/home.interface";

export const confirmLoggedIn: TConfirmLoggedIn = (user) =>
  Object.prototype.hasOwnProperty.call(user, "id");
