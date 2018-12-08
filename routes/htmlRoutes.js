var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Recipe.findAll({}).then(function(recipes) {
      res.render("index", {
        msg: "Welcome!"
      });
      console.log(recipes);
    });
  });

  // Load Create page
  app.get("/create", function(req, res) {
    console.log("create route");
    res.render("create");
  });

  //load login page
  app.get("/login", function(req, res) {
    console.log("login page");
    res.render("login");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Recipes.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
