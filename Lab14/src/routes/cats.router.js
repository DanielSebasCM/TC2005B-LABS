import { Router } from "express";
import { renderCats, toggleFreezeCat } from "../controllers/cats.controller.js";

let router = Router();

router.get("/", renderCats);
router.post("/freeze", toggleFreezeCat);

export default router;
