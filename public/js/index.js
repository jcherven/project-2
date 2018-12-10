// Get references to page elements
var $recipeText = $("#recipe-text");
var $recipeDescription = $("#recipe-description");
var $submitBtn = $("#submit");
var $exampleList = $("#recipe-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveRecipe: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/recipes",
      data: JSON.stringify(example)
    });
  },
  getRecipes: function() {
    return $.ajax({
      url: "api/recipes",
      type: "GET"
    });
  },
  deleteRecipe: function(id) {
    return $.ajax({
      url: "api/recipes/" + id,
      type: "DELETE"
    });
  }
};

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
}

// refreshExamples gets new examples from the db and repopulates the list
var refreshRecipes = function() {
  API.getRecipes().then(function(data) {
    var $recipes = data.map(function(example) {
      var $a = $("<a>")
        .text(recipe.text)
        .attr("href", "/recipe/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": recipe.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $recipeList.empty();
    $recipeList.append($recipes);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var recipe = {
    text: $recipeText.val().trim(),
    description: $recipeDescription.val().trim()
  };

  if (!(recipe.text && recipe.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveRecipe(example).then(function() {
    refreshRecipes();
  });

  $recipeText.val("");
  $recipeDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteRecipe(idToDelete).then(function() {
    refreshRecipes();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
