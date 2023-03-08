import { Router } from "express";
import { renderLab4 } from "../controllers/lab4.controller.js";

let router = Router();

router.get("/", renderLab4);

export default router;
