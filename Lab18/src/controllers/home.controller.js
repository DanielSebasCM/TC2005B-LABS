import { getPages } from "../models/home.model.js";
import { LabN } from "../models/config.js";

const renderHome = (req, res) => {
  let endpoints = getPages();
  res.render("home", { title: "Index", LabN, endpoints });
};

export { renderHome };
