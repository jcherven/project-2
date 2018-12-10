"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Recipes",
      [
        {
          recipeName: "Test Recipe 1",
          ingredients: "one\ntwo\nthree\nfour",
          steps: "one\ntwo\nthree\nfour\nfive",
          keyword: "test",
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE
        }
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Recipe", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
