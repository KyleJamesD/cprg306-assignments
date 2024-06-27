"use client";
import { useEffect } from "react";
import { useState } from "react";
export default function MealIdeas({ingredient}){
    //Define a State Variable useing the useState hook
    //intialize the state variable to an empty array 
    const [meals, setMeals] = useState([{ strMeal: "Select an item to see meal ideas", idmeal: "98032" }]);


    async function loadMealIdeas() {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return(
        <div>
            <h2>Recipes:</h2>
            {meals != null ? (
            <ul>
            {meals.map((meal) => (
                <li key={meal.idmeal}>
                    {meal.strMeal}
                    {/*<img src={meal.strMealThumb} width="100"/>*/}      
                </li>
            ))}
            </ul>     
        ):(
            <p> Select an item to see meal ideas</p>
        )}
    </div>
    );
}
async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.meals) {
            return data.meals;
        } else {
            return [{ strMeal: `No meal ideas found for ${ingredient}`, idMeal: "98032" }];
        }
    } catch (error) {
        console.log(error.message);

    }
}





