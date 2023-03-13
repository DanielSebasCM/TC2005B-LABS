import User from "../models/users.model.js";
import { LabN } from "../models/config.js";

const renderUsers = async (req, res) => {
  const users = await User.getAll();
  console.log(users);
  res.render("users", { title: "Usuarios", LabN, list: users });
};

const addUser = async (req, res) => {
  const user = req.body;
  console.log(await new User(user).post());
  res.status(201).send("Usuario agregado");
};

const removeUser = async (req, res) => {
  let user = await User.getById(req.params.uid);
  console.log(user);
  console.log(await user.delete());
  res.status(204).send("Usuario eliminado");
};

export { renderUsers, addUser, removeUser };
