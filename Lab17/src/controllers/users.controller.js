import { getUsers, createUser, deleteUserById } from "../models/users.model.js";
import { LabN } from "../models/config.js";

const renderUsers = async (req, res) => {
  const users = await getUsers();
  console.log(users);
  res.render("users", { title: "Usuarios", LabN, list: users });
};

const addUser = async (req, res) => {
  const user = req.body;
  console.log(await createUser(user));
  res.status(201).send("Usuario agregado");
};

const removeUser = async (req, res) => {
  console.log(req.params);
  console.log(await deleteUserById(req.params.uid));
  res.status(204).send("Usuario eliminado");
};

export { renderUsers, addUser, removeUser };
