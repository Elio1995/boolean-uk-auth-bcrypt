import { Router } from "express";
import { loginUser } from "./controller";

const router = Router();

router.route("/login").post(loginUser);

export default router;
