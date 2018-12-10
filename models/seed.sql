use recipe_test;
INSERT INTO recipes (recipeName, ingredients, steps, keyword, createdAt, updatedAt) 
VALUES (
    'Bathroom Tap Water', 
    'ingredient 1\ningredient 1\nIngredient 3\n Ingredient 4',
    'Step 1\nStep 2\nStep 3\nStep 4\nStep 5\nStep 6\nStep 7\n',
    "bathroom",
    NOW(),
    NOW()
);

INSERT INTO recipes (recipeName, ingredients, steps, keyword, createdAt, updatedAt) 
VALUES (
    'Test Recipe 2', 
    'ingredient 9\ningredient 10\nIngredient 11\n Ingredient 13',
    'Step 1\nStep 2\nStep 3\nStep 4\nStep 5\nStep 6\nStep 7\n',
    "recipe",
    NOW(),
    NOW()
);

select * from recipe_test.recipes;