import { LabN } from "../models/config.js";
import User from "../models/users.model.js";
import bcrypt from "bcryptjs";

const renderLogin = (req, res) => {
  res.render("login", { title: "login", LabN });
};

const login = async (req, res) => {
  console.log("Login");
  let user = await User.getByEmail(req.body.email);
  if (!user) return res.redirect("/");

  let match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.redirect("/");

  req.session.isLoggedIn = true;
  req.session.user = {
    id: user.id,
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    age: user.age,
  };

  res.redirect("/home/");
};

export { renderLogin, login };
