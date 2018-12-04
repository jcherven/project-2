use recipe_test;
INSERT INTO recipes(name, ingredients, steps) 
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

select * from recipe_test.recipes where name = 'Katsudon';