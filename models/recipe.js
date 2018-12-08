module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Recipe", {
    recipeName: DataTypes.STRING,
    ingredients: DataTypes.JSON,
    steps: DataTypes.JSON
  });
};
