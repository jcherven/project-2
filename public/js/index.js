// Get references to page elements
$(document).ready(function() {
  M.updateTextFields();
  console.log("testing");

  $(".btn").on("click", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    // var newRecipe = {
    //   recipeName: $("#recipe_title").val(),
    //   ingredients: $("#ingredients").val(),
    //   steps: $("#steps").val()
    // };
    var newRecipe = {};
    newRecipe.recipeName = $("#recipe_title").val();
    newRecipe.ingredients = $("#ingredients").val().split("\n");
    newRecipe.steps = $("#steps").val().split("\n");

    console.log(newRecipe);

    if (!newRecipe.recipeName || !newRecipe.ingredients || !newRecipe.steps) {
      return;
    } else {
      $.ajax("/api/recipes", {
        method: "POST",
        data: newRecipe
      }).then(function() {
        location.reload();
      });
    }
  }
});
