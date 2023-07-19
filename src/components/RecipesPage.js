import React from 'react';

const RecipesPage = () => {
  const breakfastRecipes = [
    {
      title: 'Sweet Potato Hash',
      ingredients: ['Sweet potatoes', 'Onion', 'Bell peppers', 'Bacon', 'Eggs'],
      instructions: 'Instructions for Sweet Potato Hash:\n\n1. Peel and dice the sweet potatoes.\n2. Dice the onion and bell peppers.\n3. Cook the bacon until crispy, then remove from the pan and chop it into pieces.\n4. In the same pan with the bacon drippings, add the diced sweet potatoes and cook until they start to soften.\n5. Add the diced onions and bell peppers to the pan and continue cooking until everything is tender.\n6. Push the sweet potato mixture to one side of the pan and crack the eggs into the empty side.\n7. Cook the eggs to your desired doneness.\n8. Season the sweet potato hash with salt and pepper to taste.\n9. Serve the hash with the cooked eggs on top.\n\nEnjoy your delicious Sweet Potato Hash!',
    },
    {
      title: 'Avocado and Bacon Stuffed Eggs',
      ingredients: ['Hard-boiled eggs', 'Avocado', 'Bacon', 'Lemon juice', 'Salt', 'Pepper'],
      instructions: 'Instructions for Avocado and Bacon Stuffed Eggs:\n\n1. Cut the hard-boiled eggs in half lengthwise and carefully remove the yolks.\n2. In a bowl, mash the yolks together with diced avocado, crumbled bacon, lemon juice, salt, and pepper.\n3. Spoon the yolk mixture back into the egg white halves.\n4. Garnish with additional crumbled bacon and a sprinkle of pepper.\n5. Serve and enjoy your delicious Avocado and Bacon Stuffed Eggs!',
    },{
        title: 'Banana pancakes made with banana, eggs, and cinnamon',
        ingredients:['2 ripe bananas','4 large eggs','1 teaspoon ground cinnamon'],
        instructions: 'Instructions for Banana Pancakes:\n\n1. In a bowl, mash the ripe bananas until smooth.\n2. Add the eggs and ground cinnamon to the mashed bananas.\n3. Mix all the ingredients together until well combined.\n4. Heat a non-stick pan over medium heat and lightly grease with cooking spray or oil.\n5. Pour small amounts of the pancake batter onto the pan to form pancakes (adjust the size according to your preference).\n6. Cook the pancakes for 2-3 minutes on each side until golden brown.\n7. Repeat the process with the remaining batter.\n8. Serve the banana pancakes with your favorite toppings, such as maple syrup, fresh fruits, or nuts.\n\nEnjoy your delicious Banana Pancakes!'
    }
    // Add more breakfast recipes as needed
  ];

  const lunchRecipes = [
    {
      title: 'Grilled Chicken Salad',
      ingredients: ['Grilled chicken', 'Mixed greens', 'Tomatoes', 'Cucumbers', 'Avocado', 'Balsamic vinaigrette'],
      instructions: 'Instructions for Grilled Chicken Salad:\n\n1. Prepare the mixed greens by washing and drying them thoroughly.\n2. Slice the tomatoes, cucumbers, and avocado.\n3. Season the grilled chicken with your preferred spices and cook it on a grill until fully cooked and slightly charred.\n4. Let the chicken rest for a few minutes, then slice it into thin strips.\n5. In a large salad bowl, combine the mixed greens, sliced tomatoes, cucumbers, avocado, and grilled chicken.\n6. Drizzle balsamic vinaigrette dressing over the salad and toss everything together until well coated.\n7. Serve the Grilled Chicken Salad immediately or refrigerate it for later use.\n\nEnjoy your delicious and nutritious Grilled Chicken Salad!',
    },
    {
      title: 'Tuna Salad Lettuce Wraps',
      ingredients: ['Canned tuna', 'Mayonnaise', 'Dijon mustard', 'Celery', 'Red onion', 'Lettuce leaves'],
      instructions: 'Instructions for Tuna Salad Lettuce Wraps:\n\n1. In a mixing bowl, combine the canned tuna, mayonnaise, Dijon mustard, diced celery, and finely chopped red onion.\n2. Mix all the ingredients together until well combined.\n3. Wash and dry the lettuce leaves, then lay them flat on a clean surface.\n4. Spoon the tuna salad mixture onto the center of each lettuce leaf.\n5. Carefully roll up the lettuce leaves around the tuna salad to form wraps.\n6. Serve the Tuna Salad Lettuce Wraps as a light and refreshing lunch or snack.\n\nEnjoy your delicious Tuna Salad Lettuce Wraps!'
    },
    // Add more lunch recipes as needed
  ];

  const dinnerRecipes = [
    {
      title: 'Baked Salmon with Roasted Vegetables',
      ingredients: ['Salmon fillets', 'Asparagus', 'Carrots', 'Zucchini', 'Olive oil', 'Lemon juice', 'Garlic', 'Salt', 'Pepper'],
      instructions: 'Preheat the oven to 400°F (200°C). \n\n1. Place the salmon fillets on a baking sheet lined with parchment paper. \n\n2. In a bowl, toss the asparagus, carrots, and zucchini with olive oil, lemon juice, minced garlic, salt, and pepper. Spread the vegetables around the salmon on the baking sheet. \n\n3. Bake in the preheated oven for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. \n\n4. Remove from the oven and serve the baked salmon with the roasted vegetables. Enjoy!'
    },
    {
      title: 'Beef Stir-Fry with Broccoli and Cauliflower Rice',
      ingredients: ['Beef strips', 'Broccoli', 'Cauliflower rice', 'Coconut aminos', 'Ginger', 'Garlic', 'Coconut oil'],
      instructions: 'Instructions for Beef Stir-Fry with Broccoli and Cauliflower Rice:\n\n1. In a wok or large skillet, heat coconut oil over medium-high heat.\n2. Add the beef strips and cook until browned and cooked to your desired doneness. Set aside.\n3. In the same pan, add more coconut oil if needed, then add minced garlic and ginger. Stir-fry for about 30 seconds until fragrant.\n4. Add the broccoli florets and cook until slightly tender.\n5. Stir in the cauliflower rice and coconut aminos, and cook for another 2-3 minutes until the cauliflower rice is heated through.\n6. Return the cooked beef strips to the pan and toss everything together.\n7. Adjust the seasoning with salt and pepper to taste.\n8. Serve the Beef Stir-Fry with Broccoli and Cauliflower Rice hot and enjoy!\n\nEnjoy your delicious Beef Stir-Fry with Broccoli and Cauliflower Rice!'
    },
    // Add more dinner recipes as needed
  ];

  return (
    <div>
      <h1>Whole30 Recipes</h1>

      <h2>Breakfast Recipes</h2>
      {breakfastRecipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions:</h4>
          <p>{recipe.instructions}</p>
        </div>
      ))}

      <h2>Lunch Recipes</h2>
      {lunchRecipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions:</h4>
          <p>{recipe.instructions}</p>
        </div>
      ))}

      <h2>Dinner Recipes</h2>
      {dinnerRecipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions:</h4>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipesPage;


