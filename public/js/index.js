// Get references to page elements
$(document).ready(function() {
  console.log("testing");

  $(".btn").on("click", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    var newRecipe = {
      recipeName: $("#recipe_title").val(),
      ingredients: $("#ingredients").val(),
      steps: $("#steps").val()
    };
    // var newRecipe = {
    //   recipeName: $("#recipe_title").val(),
    //   ingredients: $("#ingredients").val().split("\n"),
    //   steps: $("#steps").val().split("\n")
    // };
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
