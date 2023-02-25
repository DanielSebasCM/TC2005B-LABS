import express from "express";
import router from "./routers/index.js";
import ejs from "ejs";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5050;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
