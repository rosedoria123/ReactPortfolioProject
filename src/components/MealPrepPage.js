import React from 'react';
import './MealPrepPage.css'; 

const MealPrepPage = () => {
  // Define the meal plan for the week
  const mealPlan = [
    {
      day: 'Monday',
      breakfast: 'Scrambled eggs with spinach and avocado',
      lunch: 'Grilled chicken salad with mixed greens,cherry tomatoes, cucumber, and a lemon vinaigrette.',
      dinner: 'Pan-seared salmon with roasted brussels sprouts and sweet potatoes',
    },
    {
      day: 'Tuesday',
      breakfast: 'Sweet potato hash with bell peppers and ground turkeyo',
      lunch: 'Tuna salad made with Whole30-compliant mayo,served on lettuce leaves',
      dinner: 'Beef stir-fry with broccoli, carrots, and cauliflower rice',
    },
    {
        day: 'Wednesday',
        breakfast: 'Omelette with mushrooms, tomatoes, and fresh herbs',
        lunch: 'Shrimp salad with mixed greens, cherry tomatoes, avocado, and a citrus vinaigrette',
        dinner: 'Roasted chicken with rosemary, garlic, and a side of green beans'
    },
    {
        day: 'Thursday',
        breakfast: 'Butternut squash and apple soup with a side of hard-boiled eggs',
        lunch: 'Chicken lettuce wraps with cucumber,bell peppers, and Whole30-compliant mayo',
        dinner: 'Baked cod with a lemon and dill sauce, served with roasted asparagus'
    },
    {
        day: 'Friday',
        breakfast: 'Banana pancakes made with banana, eggs, and cinnamon',
        lunch: 'Roast beef roll-ups with mustard, served with a side salad',
        dinner: 'Lemon herb chicken with zucchini noodles'
    }, 
    {
        day: 'Saturday',
        breakfast: 'Breakfast sausage with a side of fruit salad',
        lunch: 'Grilled salmon with a side of mixed greens and avocado',
        dinner: 'Stuffed bell peppers with ground turkey and a side of roasted vegetables'
    },
    {
        day: 'Sunday',
        breakfast: 'Scrambled eggs with smoked salmon and fresh dill',
        lunch: 'Turkey salad with mixed greens, cherry tomatoes, cucumber, and a balsamic vinaigrette',
        dinner: 'Grilled steak with chimichurri sauce and a side of sweet potato fries'
    }
  ];

  return (
    <div className="meal-prep-page">
      <h1 className="meal-prep-title">Meal Prep for the Week</h1>
      <table className="meal-plan-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {mealPlan.map((meal) => (
            <tr key={meal.day}>
              <td>{meal.day}</td>
              <td>{meal.breakfast}</td>
              <td>{meal.lunch}</td>
              <td>{meal.dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealPrepPage;

