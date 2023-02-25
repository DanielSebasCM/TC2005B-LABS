import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  res.contentType("text/html");

  const endpoints = fs.readdirSync("./public");
  const content = endpoints.map((endpoint) => {
    return `<li><a href="${endpoint}">${endpoint}</a></li>`;
  });

  res.send(`<ul>${content.join("")}</ul>`);
});

router.post("/users", (req, res) => {
  console.log(req.body);

  const path = "./public/users/users.txt";

  res.statusCode = 201;
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, "Users: \n\n");
  }

  let contenido = "";
  contenido += `name: ${req.body.name}\n`;
  contenido += `lastname: ${req.body.lastname}\n`;
  contenido += `email: ${req.body.email}\n`;
  contenido += `age: ${req.body.age}\n\n`;

  fs.appendFileSync(path, contenido);
  res.send("User created");
});

export default router;
