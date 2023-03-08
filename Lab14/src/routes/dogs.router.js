import { Router } from "express";
import { renderDogs } from "../controllers/dogs.controller.js";

let router = Router();

router.get("/", renderDogs);

export default router;
