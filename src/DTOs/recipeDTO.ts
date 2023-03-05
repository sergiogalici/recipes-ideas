export type RecipeDTO = {
    calories: number
    cautions: string[]
    cuisineType: string[]
    dietLabels: string[]
    dishType: string[]
    healthLabels: string[]
    image: string
    ingredientLines: string[]
    ingredients: IngredientType[]
    label: string
    mealType: string
    
}

type IngredientType = {
    text: string
    quantity: number
    measure: string
    food: string
    weight: number
}