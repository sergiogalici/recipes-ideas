import React, { useRef, useState } from 'react';
import './App.css';
import { RecipeDTO } from './DTOs/recipeDTO';
import { HealthType, OptionsType } from './types/options';
import { callToApi } from './utils/apiCall';

const appId = process.env.REACT_APP_EDAMAM_APP_ID!
const appKey = process.env.REACT_APP_EDAMAM_APP_KEY!


function App() {
  const [currRecipe, setCurrRecipe] = useState<Partial<RecipeDTO>>({})
  const [ingredients, setIngredients] = useState<string>("")
  const [showIngredients, setShowIngredients] = useState<boolean>(false)
  const [diet, setDiet] = useState<HealthType>('')

  const ingredientsRef = useRef<HTMLDivElement>(null)


  const handleClick = async () => {
    const optionsToSend: OptionsType = {
      params: {
        app_id: appId,
        app_key: appKey,
        ingr: "3+",
        mealType: "Lunch",
        q: ingredients,
        random: true,
        type:'public',
        health: diet.length ? diet : undefined
      }
    }

    try {
      const recipe: RecipeDTO | undefined = await callToApi(optionsToSend)
      if (recipe) {
        setCurrRecipe(recipe)
      }
    } catch (error) {
      console.log(error)
    }

  }

  const handleShowIngredientsClick = () => {
    setShowIngredients(!showIngredients)
    
    if (ingredientsRef.current) {
      window.scrollTo({
        top: ingredientsRef.current.offsetTop,
        behavior: "smooth"
      });
    }
  }
  

  return (
    <div className="App">
      <div className='outer-container'>
        <div className='search-container'>
          <input
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            placeholder='Insert one or more ingredients separated by a comma'
          />
          <div className='diet-container'>
            <label htmlFor="diet">Select your diet:</label>
            <select id="diet" value={diet} onChange={(e) => setDiet(e.target.value as HealthType)}>
              <option value="">Select an option</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="crustacean-free">Crustacean-Free</option>
              <option value="dairy-free">Dairy-Free</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="peanut-free">Peanut-Free</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="pescatarian">Pescatarian</option>
              <option value="low-sugar">Low-Sugar</option>
            </select>
            {diet ? <p>You selected {diet}.</p> : <p>No diet selected</p>}
      </div>
          <button className='first-button' onClick={handleClick}>Get a random Recipe</button>
        </div>
        {Object.values(currRecipe).length > 1 && 
          <div ref={ingredientsRef} className="scroll-container">
            <p>{currRecipe.label}</p>
            <p>{`Calories: ${Math.floor(currRecipe.calories!)}`}</p>
            <p>{`Fat: ${Math.floor(currRecipe.digest?.find(dig => dig.label === "Fat")?.total!)}`}</p>
            <p>{`Carbs: ${Math.floor(currRecipe.digest?.find(dig => dig.label === "Carbs")?.total!)}`}</p>
            <p>{`Protein: ${Math.floor(currRecipe.digest?.find(dig => dig.label === "Protein")?.total!)}`}</p>
            <img src={currRecipe.image} alt={currRecipe.label} />
            <button onClick={handleShowIngredientsClick}>{!showIngredients ? "Show Ingredients" : "Hide Ingredients"}</button>
            {showIngredients && (
              <>
                <p>Ingredients:</p>
                {currRecipe.ingredients?.map((ingr, index) => (
                  <p key={index}>{ingr.text}</p>
                ))}
              </>
            )}
            <a rel="noreferrer" target="_blank" href={currRecipe.url}>Link to the recipe</a>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
