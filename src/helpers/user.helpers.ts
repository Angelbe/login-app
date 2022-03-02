import { EUserKeys, TConfirmLoggedIn } from "src/interfaces/user.interface";

export const confirmLoggedIn: TConfirmLoggedIn = (user) => !!user[EUserKeys.id];
