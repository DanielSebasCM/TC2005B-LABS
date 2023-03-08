import { LabN } from "../models/config.js";
import { randDogs } from "../models/dogs.model.js";

const renderDogs = async (req, res) => {
  console.log("DOGSS");
  const dogs = randDogs();
  res.render("dogs", { title: "Perros", LabN, list: dogs });
};

export { renderDogs };
