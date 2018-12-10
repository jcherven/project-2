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

    if (
      !newRecipe.recipeName ||
      !newRecipe.ingredients ||
      !newRecipe.steps ||
      !newRecipe.keyword
    ) {
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

  $(".searchbtn").on("click", handleSearchButton);

  function handleSearchButton(event) {
    event.preventDefault();
    var searchTerm = $("#search").val();
    console.log(searchTerm);
    if (searchTerm !== null) {
      $.ajax("/api/recipes", {
        method: "GET",
        where: {
          keyword: searchTerm
        }
      }).then(function(body) {
        console.log("is this thing on");
        $("#search-term").text(searchTerm);
        console.log(body);
        for (i = 0; i < body.length; i++) {
          $("#search-results").append($("<tr>").text(body[i]));
        }
      });
    }
    // app.get("/api/recipes", function(req, res) {
    //   db.Recipe.findAll({
    //     where: {
    //       keyword: searchTerm
    //     }
    //   }).then(function(body) {
    //     res.render("results");
    //     console.log("is this thing on");
    //     $("#search-term").text(searchTerm);
    //     console.log(body);
    //     for (i = 0; i < body.length; i++) {
    //       $("#search-results").append($("<tr>").text(body[i]));
    //     }
    //   });
    // });
  }
});
