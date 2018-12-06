module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("recipes_table", {
    recipeName: DataTypes.STRING,
    ingredients: DataTypes.JSON,
    steps: DataTypes.JSON
    // createdAt: NOW(),
    // updatedAt: NOW()
  });
  return Recipes;
};
