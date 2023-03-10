import { LabN } from "../models/config.js";

const renderLab4 = (req, res) => {
  res.render("Lab4", { title: "Lab4", LabN });
};

export { renderLab4 };
