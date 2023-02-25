import express from "express";
import router from "./routers/index.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

router.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log("http://localhost:3000");
});
