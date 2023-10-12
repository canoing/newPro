const helpers = {};

helpers.isAuthenticate = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Oh, you think you're very clever."); // Colocar la llamada a req.flash antes de la redirección
  res.redirect("/user/signin");
};

module.exports = helpers;


