var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Recipe.findAll({}).then(function(recipes) {
      res.render("index");
    });
  });

  // Load Create page
  app.get("/create", function(req, res) {
    res.render("create");
  });

  //load login page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  //load results page
  app.get("/results", function(req, res) {
    res.render("results");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
