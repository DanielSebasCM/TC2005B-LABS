import express from "express";
import fs from "fs";

import logRequests from "./middlewares/logRequests.js";
import {
  renderIndex,
  renderLab4,
  addUser,
  deleteUser,
  renderCats,
  renderDogs,
  renderUsers,
} from "./controllers/controller.js";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(logRequests);

app.get("/", renderIndex);

app.get("/Lab4", renderLab4);

app.get("/cats", renderCats);

app.get("/dogs", renderDogs);

app.get("/users", renderUsers);

app.post("/users", addUser);

app.delete("/users", deleteUser);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
