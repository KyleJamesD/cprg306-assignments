'use client'
//this is called destructuring when you importing two things as object properties 
import { useState,useEffect } from "react";


export default function MealIdeas({ingredient}){

const [Meals,setMeals] = useState("");

}


useEffect(()=>{

},[ingredient]);


async function loadMealIdeas(){

    const fetchedMeals = await fetchMealIdeas(ingredient);
setMeals(fetchedMeals);

}


//if a component that deals with promises it must be an async function
async function fetchMealIdeas(ingredient){
try{
// if a function returns a promise it must have await 
    const respone = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await respone.json();
    return data.meals;



}
catch(error){
console.log("Error is:", error);

}


}



const fetch = new Promise();