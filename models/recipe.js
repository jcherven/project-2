module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    recipeName: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    steps: DataTypes.TEXT,
    keyword: DataTypes.STRING
  });
  return Recipe;
};
