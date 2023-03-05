import React, { useState } from 'react';
import './App.css';
import { RecipeDTO } from './DTOs/recipeDTO';
import { OptionsType } from './types/options';
import { callToApi } from './utils/apiCall';

const appId = process.env.REACT_APP_EDAMAM_APP_ID
const appKey = process.env.REACT_APP_EDAMAM_APP_KEY


function App() {
  const [currRecipe, setCurrRecipe] = useState<Partial<RecipeDTO>>({})

  const handleClick = () => {
    const optionsToSend: OptionsType = {
      params: {
        app_id: appId!,
        app_key: appKey!,
        ingr: "3+",
        mealType: "Lunch",
        q: "ricotta, lemon",
        random: true,
        type:'public'
      }
    }

    const response = callToApi(optionsToSend)

  }

  return (
    <div className="App">
      <button onClick={handleClick}>Get</button>
    </div>
  );
}

export default App;
