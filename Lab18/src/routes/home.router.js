import { Router } from "express";
import { renderHome } from "../controllers/home.controller.js";

let router = Router();

router.get("/", renderHome);

export default router;
