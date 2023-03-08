import { randCats } from "../models/cats.model.js";
import { LabN } from "../models/config.js";

const renderCats = (req, res) => {
  console.log("NOT DOGSS");

  const cats = randCats();
  res.render("cats", { title: "Gatos", LabN, list: cats });
};

export { renderCats };
