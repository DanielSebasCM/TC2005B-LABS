import User from "../models/users.model.js";
import bcrypt from "bcryptjs";
import { LabN } from "../models/config.js";

const renderUsers = async (req, res) => {
  const users = await User.getAll();
  res.render("users", { title: "Usuarios", LabN, list: users });
};

const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.post();
    res.status(201).send("Usuario agregado");
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};

const removeUser = async (req, res) => {
  let user = await User.getById(req.params.uid);
  await user.delete();
  res.status(204).send("Usuario eliminado");
};

export { renderUsers, addUser, removeUser };
