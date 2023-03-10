import express from "express";
import session from "express-session";
import logRequests from "./src/middlewares/logRequests.js";
import routerApi from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "12345",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static("public"));
app.use(logRequests);

app.use(routerApi);
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
