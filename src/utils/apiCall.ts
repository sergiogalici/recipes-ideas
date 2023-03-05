import axios from 'axios'
import { RecipeDTO } from '../DTOs/recipeDTO'
import { OptionsType } from '../types/options'

const apiUrl = 'https://api.edamam.com/api/recipes/v2'


export const callToApi = async (options: OptionsType) => {
    try {
        const response = await axios.get(apiUrl, options)
        console.log(response.data.hits)
        const hits = response.data.hits
        const randomNum = Math.floor(Math.random() * (hits.length - 1))
        const randomRecipe = hits[randomNum].recipe

        const recipeTyped: RecipeDTO = {
            calories: randomRecipe.calories,
            cautions: randomRecipe.cautions,
            cuisineType: randomRecipe.cuisineType,
            dietLabels: randomRecipe.dietLabels,
            dishType: randomRecipe.dishType,
            healthLabels: randomRecipe.healthLabels,
            image: randomRecipe.image,
            ingredientLines: randomRecipe.ingredientLines,
            ingredients: randomRecipe.ingredients,
            label: randomRecipe.label,
            mealType: randomRecipe.mealType   
        }

        console.log(recipeTyped)
    } catch (e) {
        console.log(e)
    }
}