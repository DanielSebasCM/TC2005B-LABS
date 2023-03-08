import express from "express";

import logRequests from "./src/middlewares/logRequests.js";
import routerApi from "./src/routes/index.js";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(logRequests);

app.use(routerApi);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
