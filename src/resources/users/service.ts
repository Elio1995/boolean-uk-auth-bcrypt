import dbClient from "../../utils/dbClient";
import { User } from "@prisma/client";
import { hash } from "bcrypt";

const createHash = async (newUser: User) => {
  const plaintext = newUser.password;
  const hashedPassword = await hash(plaintext, 10);
  const savedUser = await dbClient.user.create({
    data: { ...newUser, password: hashedPassword },
  });

  return savedUser;
};

const userClient = {
  ...dbClient.user,
  createHash,
};

export default userClient;
