import { Router } from "express";
import {
  renderUsers,
  addUser,
  removeUser,
} from "../controllers/users.controller.js";

let router = Router();

router.get("/", renderUsers);

router.post("/", addUser);

router.delete("/:uid", removeUser);

export default router;
