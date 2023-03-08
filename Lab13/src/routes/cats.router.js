import { Router } from "express";
import { renderCats } from "../controllers/cats.controller.js";

let router = Router();

router.get("/", renderCats);

export default router;
