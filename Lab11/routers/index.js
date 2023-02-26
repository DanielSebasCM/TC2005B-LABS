import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.contentType("text/html");

  const endpoints = fs.readdirSync(path.join(__dirname, "../public"));
  const content = endpoints.map((endpoint) => {
    return `<li><a href="${endpoint}">${endpoint}</a></li>`;
  });

  res.send(`<ul>${content.join("")}</ul>`);
});

router.post("/users", (req, res) => {
  console.log(req.body);

  const dir = path.join(__dirname, "../public/users/users.txt");

  res.statusCode = 201;
  if (!fs.existsSync(dir)) {
    fs.writeFileSync(dir, "Users: \n\n");
  }

  let contenido = "";
  contenido += `name: ${req.body.name}\n`;
  contenido += `lastname: ${req.body.lastname}\n`;
  contenido += `email: ${req.body.email}\n`;
  contenido += `age: ${req.body.age}\n\n`;

  fs.appendFileSync(dir, contenido);
  res.send("User created");
});

export default router;
