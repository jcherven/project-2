// Get references to page elements
$(document).ready(function() {
  //how to handle the submit on the create form, sends data to the database
  $(".btn").on("click", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    var newRecipe = {
      recipeName: $("#recipe_title").val(),
      ingredients: $("#ingredients").val(),
      steps: $("#steps").val(),
      keyword: $("#keyword").val()
    };

    if (!newRecipe.recipeName || !newRecipe.ingredients || !newRecipe.steps || !newRecipe.keyword) {
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

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   var searchTerm= $("#search").val().trim();

  // }
});
