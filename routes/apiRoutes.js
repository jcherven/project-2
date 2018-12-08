var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    console.log(db.Recipe);
    db.Recipe.findAll({}).then(function(body) {
      res.json(body);
    });
  });

  // Create a new example
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(body) {
      res.json(body);
    });
  });

  // Delete an example by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipes.destroy({ where: { id: req.params.id } }).then(function(rest) {
      res.json(rest);
    });
  });
};
