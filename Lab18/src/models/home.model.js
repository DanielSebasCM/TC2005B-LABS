import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPages = () => {
  // let views = fs.readdirSync(path.join(__dirname, "../views"));

  // views = views.filter((view) => {
  //   return view !== "index.ejs" && view !== "includes";
  // });

  // views = views.map((view) => {
  //   return view.replace(".ejs", "");
  // });

  let views = ["cats", "dogs", "users", "lab4"];

  return views;
};

export { getPages };
