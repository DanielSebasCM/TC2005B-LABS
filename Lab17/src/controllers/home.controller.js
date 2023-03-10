import { getPages } from "../models/index.model.js";
import { LabN } from "../models/config.js";

const renderIndex = (req, res) => {
  let endpoints = getPages();
  res.render("index", { title: "Index", LabN, endpoints });
};

export { renderIndex };
