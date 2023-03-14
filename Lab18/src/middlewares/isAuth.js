const isAuth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    console.log("No estas logueado");
    res.redirect("/");
  }
};

export default isAuth;
