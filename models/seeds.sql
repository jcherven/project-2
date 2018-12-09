use wcgl;
INSERT INTO recipes(recipeName, ingredients, steps) 
VALUES (
    'Katsudon', 
    '[
        "2 center-cut, boneless pork chops (pounded down to a centimeter thick) ",
        "Salt",
        "Pepper",
        "2 eggs, beaten, divided",
        "Flour (for dusting)",
        "1 cup panko",
        "Oil (for frying)",
        "1 onion (thinly slices)",
        "1 1/4 cup dashi soup stock",
        "1/3 cup soy sauce",
        "2 tablespoon mirin",
        "1 tablespoon sugar",
        "4 cups of steamed rice"
    ]',
    '[
        "Gather the ingredients.",
        "Season the pounded pork chops with salt and pepper.",
        "n one shallow bowl, beat 1 egg. Put the panko into another shallow bowl.",
        "Add thin, even layer of oil to a cast iron pan or skillet over medium heat. The oil is ready when you throw a panko breadcrumb into the oil and it sizzles.",
        "Dip the pork into the egg to coat.",
        "Transfer the pork to the panko and press it evenly into the meat to get a good coating.",
        "Carefully lay the pork chops in the hot oil and cook for 5 to 6 minutes on one side, until golden brown.",
        "Flip and cook the other side for another 5 to 6 minutes.",
        "Drain on a plate lined with a paper towel.",
        "Slice your tonkatsu into pieces.",
        "Put the dashi soup stock in a pan and cook on medium heat.",
        "Add soy sauce, mirin, and sugar to the soup and bring to a boil. Stop the heat.",
        "To cook 1 serving of katsudon, put one-quarter of the soup in a small skillet and add one-quarter of onion slices in the soup and simmer for a few minutes on medium heat.",
        "Add 1 serving of tonkatsu pieces to the pan and simmer on low heat for a few minutes.",
        "Beat an egg in a bowl. Bring the soup to a boil over medium heat, then pour the egg over tonkatsu and onion.",
        "Turn the heat down to low and put on a lid.",
        "Turn off the heat.",
        "Serve 1 serving of steamed rice in a large rice bowl, then place the simmered tonkatsu on top of the rice. Repeat the process."
    ]'
);

INSERT INTO recipes(recipeName, ingredients, steps) 
VALUES (
    'Wookie Cookies',
    '[
        "2 1/4 cups all-purpose flour",
"1 teaspoon baking soda",
"1 teaspoon salt",
"1 teaspoon ground cinnamon",
"1 cup unsalted butter, at room temperature",
"1 cup packed brown sugar",
"1/2 cup granulated sugar",
"2 large eggs",
"1 1/2 teaspoons vanilla extract",
"1 cup milk chocolate chips",
"1 cup semi-sweet chocolate chips"
]',
'[
    "Preheat the oven to 375°F.",
"Put the flour, baking soda, salt, and cinnamon in a mixing bowl. Stir with the wooden spoon until well mixed. Set aside.",
"Put the butter, brown sugar, and granulated sugar in another mixing bowl. Using the electric mixer set on high speed, beat together until well blended and creamy, about 3 minutes. (You can do this with a wooden spoon, but it will take longer.)",
"Beat in the eggs and vanilla extract. Add the flour mixture and stir with the wooden spoon until blended.",
"Stir in the chocolate chips.",
"Scoop up a rounded tablespoonful of the dough and drop onto a baking sheet. Repeat until you have used up all the dough.",
"Be sure to leave about 1 inch between the cookies because they spread as they bake.",
"Using pot holders, put the baking sheets in the oven. Bake until golden brown, about 10 minutes.",
"Again, using pot holders, remove the baking sheets from the oven. Lift the cookies from the baking sheets with a spatula, and place on cooling racks. Let cool completely."
"]');

INSERT INTO recipes(recipeName, ingredients, steps) 
VALUES ('Rum Cake with Key Lime Buttercream Icing','[(cake)
2 cups granulated sugar
1 cup unsalted butter, softened
3 large eggs, separated
2 tsp vanilla extract
4 cups all purpose flour
1 tbsp baking powder
1 tsp kosher salt
1 1/4 cup half and half
1/3 cup dark rum
key lime buttercream frosting, sugar key limes and cranberries
(key lime buttercream icing)
1 8 ounce package cream cheese, softened
1 cup unsalted butter, softened
1 16 ounce package powdered sugar
1 tbsp key lime zest, plus 1 tbsp fresh juice (about 3 key limes)
1 tsp vanilla extract
1/2 tsp kosher salt
2 tbsp whole milk]',
'[preheat over to 350 degrees. beat sugar, butter with electric mixer on medium speed until light and fluffy, about two minutes. add egg yolks, 1 at a time, beating just until blended and smooth; beat in vanilla. whisk together flour, baking soda and salt in a medium bowl. combine half and half and rum in a small bowl. add flour mixture to butter mixture alternately with rum mixture, beginning and ending with flour mixture, beating on low speed just until flour mixture is incorporated after each addition. 

using clean, dry, beaters, beat egg whites in a separate bowl until stiff peaks form. gently fold into batter. divide batter evenly among 3 greased and floured 8 inch round cake pans.  bake in preheated oven until a wooden pick inserted in center comes out clean, 23-25 minutes.  transfer to wire racks and cool in pans 20 minutes. remove cakes from pans to wire racks and cool completely, about 1 hour. 

place one layer on a serving place and spread 1 cup key lime frosting over top. add second layer and spread top with 1 cup key lime frosting. add third cake layer and spread top and sides with remaining frosting. top with sugared key limes and cranberries, garnish with mint leaves if desired. (icing)beat cream cheese and butter with an electric mixer on medium until smooth, about 2 minutes. gradually add powdered sugar and beat until smooth. add zest, juice, vanilla and salt, and beat until smooth. add milk, 1 tbsp at a time and beat to desired consistency. ]'


select * from wcgl.recipes where name = 'Katsudon';