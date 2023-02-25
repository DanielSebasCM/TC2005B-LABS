import express from "express";
import router from "./routers/index.js";
import path from "path";
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static("public"));
app.use(router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log("http://localhost:3000");
});
