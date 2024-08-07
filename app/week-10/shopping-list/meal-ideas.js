"use client";
import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [mealDetails, setMealDetails] = useState({});

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      return data.meals[0];
    } catch (error) {
      console.error("Error fetching meal details:", error);
      return null;
    }
  };

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  const handleMealClick = async (mealId) => {
    if (mealDetails[mealId]) {
      setSelectedMealId(selectedMealId === mealId ? null : mealId);
    } else {
      const meal = await fetchMealDetails(mealId);
      setMealDetails((prevDetails) => ({ ...prevDetails, [mealId]: meal }));
      setSelectedMealId(mealId);
    }
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      {ingredient && (
        <p className="mb-4">Here are some meal ideas using {ingredient}:</p>
      )}
      {meals && meals.length > 0 ? (
        <ul>
          {meals.map(meal => (
            <li 
              key={meal.idMeal} 
              className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded" 
              onClick={() => handleMealClick(meal.idMeal)}
            >
              <div>{meal.strMeal}</div>
              {selectedMealId === meal.idMeal && mealDetails[meal.idMeal] && (
                <ul className="mt-2 text-sm text-gray-400">
                  {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map(i => ({
                      ingredient: mealDetails[meal.idMeal][`strIngredient${i}`],
                      measure: mealDetails[meal.idMeal][`strMeasure${i}`]
                    }))
                    .filter(ing => ing.ingredient && ing.ingredient.trim() !== '')
                    .map((ing, index) => (
                      <li key={index} className="mb-2">{`${ing.ingredient} - ${ing.measure}`}</li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for {ingredient}</p>
      )}
    </div>
  );
}