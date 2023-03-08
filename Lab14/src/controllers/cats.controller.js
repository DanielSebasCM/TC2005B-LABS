import { randCats, getCatImg } from "../models/cats.model.js";
import { LabN } from "../models/config.js";

const renderCats = async (req, res) => {
  console.log("NOT DOGSS");

  const frozen = req.session.cat_frozen ? req.session.cat_frozen : false;

  let img = req.session.cat_frozen ? req.session.cat_img : await getCatImg();
  console.log("frozen: ", req.session.cat_frozen, "IMG: ", req.session.cat_img);
  let cats = randCats();
  res.render("cats", { title: "Gatos", LabN, list: cats, frozen, img });
};

const toggleFreezeCat = (req, res) => {
  if (req.session.cat_frozen) {
    req.session.cat_frozen = false;
  } else {
    req.session.cat_frozen = true;
    req.session.cat_img = req.body.img;
  }

  res.send("OK");
};

export { renderCats, toggleFreezeCat };
