import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as randomData from "../src/randomData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LabN = "12";

const usersPath = "../public/users/users.json";

const renderIndex = (req, res) => {
  let endpoints = fs.readdirSync(path.join(__dirname, "../views"));

  endpoints = endpoints.map((endpoint) => {
    if (endpoint === "index.ejs" || endpoint === "includes") {
      return null;
    }
    return endpoint.replace(".ejs", "");
  });

  endpoints = endpoints.filter((endpoint) => endpoint !== null);

  res.render("index", { title: "Index", LabN, endpoints });
};

const renderLab4 = (req, res) => {
  res.render("Lab4", { title: "Lab4", LabN });
};

const renderCats = (req, res) => {
  const cats = randomData.getCats();
  res.render("cats", { title: "Gatos", LabN, list: cats });
};

const renderDogs = async (req, res) => {
  const dogs = randomData.getDogs();
  res.render("dogs", { title: "Perros", LabN, list: dogs });
};

const renderUsers = (req, res) => {
  const dir = path.join(__dirname, usersPath);
  if (!fs.existsSync(dir)) {
    fs.writeFileSync(dir, "[]");
  }

  let users = JSON.parse(fs.readFileSync(dir));
  if (users.length === 0) {
    users = randomData.getUsers();
    fs.writeFileSync(dir, JSON.stringify(users));
  }

  res.render("users", { title: "Usuarios", LabN, list: users });
};

const addUser = (req, res, next) => {
  const dir = path.join(__dirname, usersPath);
  let users = [];
  if (fs.existsSync(dir)) {
    users = JSON.parse(fs.readFileSync(dir));
  }

  if (
    !req.body.email ||
    !req.body.name ||
    !req.body.lastName ||
    !req.body.age
  ) {
    console.log("Faltan campos");
    res.status(400).send("Faltan campos");
    return;
  }

  users.push(req.body);
  fs.writeFileSync(dir, JSON.stringify(users));

  res.status(201).send("Usuario agregado");
};

const deleteUser = (req, res) => {
  const dir = path.join(__dirname, usersPath);

  if (!fs.existsSync(dir)) {
    res.status(404).send("No se encontró el archivo");
  }

  const users = JSON.parse(fs.readFileSync(dir));

  const filteredUsers = users.filter((user) => {
    return (
      user.email !== req.body.email ||
      user.name !== req.body.name ||
      user.lastname !== req.body.lastname ||
      user.age != req.body.age
    );
  });
  fs.writeFileSync(dir, JSON.stringify(filteredUsers));

  res.status(204).send("Usuario eliminado");
};

export {
  renderIndex,
  addUser,
  deleteUser,
  renderLab4,
  renderCats,
  renderDogs,
  renderUsers,
};
