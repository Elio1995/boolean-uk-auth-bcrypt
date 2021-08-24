import dbClient from "../../utils/dbClient";
import { User } from "@prisma/client";

import { compare } from "bcrypt";

export const userWithValidation = async (userData: User) => {
  const foundUser = await dbClient.user.findUnique({
    where: { username: userData.username },
  });

  if (!foundUser) throw new Error("Username/Password incorrect");

  const isPasswordValid = await compare(userData.password, foundUser.password);

  if (!isPasswordValid) throw new Error("Username/Password incorrect");

  return foundUser;
};
