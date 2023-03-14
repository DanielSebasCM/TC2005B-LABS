import { Router } from "express";
import lab4Router from "./lab4.router.js";
import dogsRouter from "./dogs.router.js";
import catsRouter from "./cats.router.js";
import usersRouter from "./users.router.js";
import { renderLogin, login } from "../controllers/login.controller.js";
import homeRouter from "./home.router.js";
import isAuth from "../middlewares/isAuth.js";

let router = Router();

router.use("/lab4", isAuth, lab4Router);
router.use("/dogs", isAuth, dogsRouter);
router.use("/cats", isAuth, catsRouter);
router.use("/users", usersRouter);
router.use("/home", isAuth, homeRouter);
router.get("/", renderLogin);
router.post("/login", login);

export default router;
