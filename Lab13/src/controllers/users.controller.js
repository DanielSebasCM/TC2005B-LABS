import { getUsers, createUser, deleteUser } from "../models/users.model.js";
import { LabN } from "../models/config.js";

const renderUsers = (req, res) => {
  const users = getUsers();
  res.render("users", { title: "Usuarios", LabN, list: users });
};

const addUser = (req, res, next) => {
  const user = req.body;
  createUser(user);
  res.status(201).send("Usuario agregado");
};

const removeUser = (req, res) => {
  deleteUser(req.body);
  res.status(204).send("Usuario eliminado");
};

export { renderUsers, addUser, removeUser };
