var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes_tables", function(req, res) {
    db.Recipes.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/recipes_tables", function(req, res) {
    db.Recipes.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/recipes_tables/:id", function(req, res) {
    db.Recipes.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
