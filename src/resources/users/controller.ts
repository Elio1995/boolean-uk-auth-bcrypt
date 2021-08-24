import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";
import userClient from "./service";

export const getAllUsers = async (req: Request, res: Response) => {
  const allUsers = await userClient.findMany();

  res.json({ data: allUsers });
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = req.body;

  const brandNewUser = await userClient.createHash(newUser);
  res.json({ data: brandNewUser });
};
