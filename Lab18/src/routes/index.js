import { Router } from "express";
import lab4Router from "./lab4.router.js";
import dogsRouter from "./dogs.router.js";
import catsRouter from "./cats.router.js";
import usersRouter from "./users.router.js";
import { renderIndex } from "../controllers/home.controller.js";

let router = Router();

router.use("/lab4", lab4Router);
router.use("/dogs", dogsRouter);
router.use("/cats", catsRouter);
router.use("/users", usersRouter);
router.use("/", renderIndex);

export default router;
