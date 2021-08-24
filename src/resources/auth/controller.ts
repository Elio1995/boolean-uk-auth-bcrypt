import { Request, Response } from "express";
import { User } from "@prisma/client";
import dbClient from "../../utils/dbClient";
import { userWithValidation } from "./service";
import { compare } from "bcrypt";

export const loginUser = async (req: Request, res: Response) => {
  const userCredentials: User = req.body;

  //   const userData = await dbClient.user.findUnique({
  //     where: {
  //       username: userCredentials.username,
  //     },
  //   });

  //   const passwordValid = await compare(
  //     userCredentials.password,
  //     userData.password
  //   );

  try {
    const loggedInUser = await userWithValidation(userCredentials);

    res.json({
      user: { id: loggedInUser.id, username: loggedInUser.username },
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
